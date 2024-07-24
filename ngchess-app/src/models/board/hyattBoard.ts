import { Color } from "../enums/Color.enum";
import { Bishop } from "../pieces/Bishop";
import { King } from "../pieces/King";
import { Knight } from "../pieces/Knight";
import { Pawn } from "../pieces/Pawn";
import { HyattMove, Move, Piece } from "../pieces/Piece";
import { Queen } from "../pieces/Queen";
import { Rook } from "../pieces/Rook";
import { BaseBoard } from "./baseBoard";

export class HyattBoard extends BaseBoard {
  private hyattTable: (King | Queen | Rook | Bishop | Knight | Pawn | null)[] = [];
  private hyatt120: number[] = [];
  private hyatt64: number[] = [];
  

  constructor() {
    super();
    this.initHyatt120();
    this.initHyatt64();
  }

  
  // ---- hyatt method ? more optimized ? ----
  public getBoardPieces() : (King | Queen | Rook | Bishop | Knight | Pawn | null)[] {
    return this.hyattTable;
  }
  
  override isValidPosition(square: number): boolean {
    return 0 <= square && square <= 63;
  }

  override getPiece(square: number): Piece | null {
    if(!this.isValidPosition(square))
      return null;
    return this.hyattTable[square];
  }

  override isPieceAt(square: number, pieceType: typeof Piece, color: Color): boolean {
    const piece = this.getPiece(square);
    return piece !== null && piece instanceof pieceType && piece.color === color;
  }

  override movePiece(move: HyattMove): void {
    if(!this.isValidPosition(move.from) || !this.isValidPosition(move.to))
      return;

    const piece = this.getPiece(move.from);
    if(piece){
      this.hyattTable[move.to] = piece;
      this.hyattTable[move.from] = null;
    }

  }
  override isEmpty(square: number): boolean {
    return this.getPiece(square) === null;
  }

  override isOpponentPiece(square: number, color: Color): boolean {
    const piece = this.getPiece(square);
    return piece !== null && piece.color !== color;
  }

  public reset(): void {
    this.initHyattTable();
  }

  private initHyatt120(): void{
    this.hyatt120 = Array(120).fill(-1);
    let counter = 0;
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 12; col++) {
        if (row >= 2 && row <= 9 && col >= 2 && col <= 9) {
          this.hyatt120[row * 12 + col] = counter++;
        }
      }
    }
  }

  private initHyatt64(): void{
    this.hyatt64 = [];
    let counter = 0;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        this.hyatt64.push(counter++);
      }
    }
  }

  private initHyattTable(): void {
    this.hyattTable = Array(64).fill(null);
    for (let i = 8; i < 16; i++) {
      this.hyattTable[i] = new Pawn(Color.white);
      this.hyattTable[i + 40] = new Pawn(Color.black);
    }
    const homeRowPieces = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];
    homeRowPieces.forEach((PieceClass, index) => {
      this.hyattTable[index] = new PieceClass(Color.white);
      this.hyattTable[63 - index] = new PieceClass(Color.black);
    });

  }

}