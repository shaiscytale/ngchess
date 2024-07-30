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
  private hyatt120: number[] = [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, 0, 1, 2, 3, 4, 5, 6, 7, -1,
    -1, 8, 9, 10, 11, 12, 13, 14, 15, -1,
    -1, 16, 17, 18, 19, 20, 21, 22, 23, -1,
    -1, 24, 25, 26, 27, 28, 29, 30, 31, -1,
    -1, 32, 33, 34, 35, 36, 37, 38, 39, -1,
    -1, 40, 41, 42, 43, 44, 45, 46, 47, -1,
    -1, 48, 49, 50, 51, 52, 53, 54, 55, -1,
    -1, 56, 57, 58, 59, 60, 61, 62, 63, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1
   ];
  private hyatt64: number[] = [
    21, 22, 23, 24, 25, 26, 27, 28,
    31, 32, 33, 34, 35, 36, 37, 38,
    41, 42, 43, 44, 45, 46, 47, 48,
    51, 52, 53, 54, 55, 56, 57, 58,
    61, 62, 63, 64, 65, 66, 67, 68,
    71, 72, 73, 74, 75, 76, 77, 78,
    81, 82, 83, 84, 85, 86, 87, 88,
    91, 92, 93, 94, 95, 96, 97, 98
   ];

  private threats: number[] = [];

  constructor() {
    super();
  }


  // ---- hyatt method ? more optimized ? ----
  public getBoardPieces() : (King | Queen | Rook | Bishop | Knight | Pawn | null)[] {
    return this.hyattTable;
  }

  override isValidPosition(square: number): boolean {
    return 0 <= square && square <= 63;
  }

  override getPiece(square: number): Piece | null {
    return this.hyattTable[square] as Piece | null;
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

  public getMoveDirection(square: number, direction: number) : number {
    let h64Index = this.hyatt64[square];
    return this.hyatt120[h64Index + direction];
  }

  public isValidDirection(square: number, direction: number): boolean {
    return this.getMoveDirection(square, direction) !== -1;
  }

  public getPieceMoves(piece: Piece, square: number): HyattMove[] {
    let moves: HyattMove[] = [];
    const directions = piece.getHyattDirections(square);

    // generic moves
    directions.forEach((direction) => {

      let dx = direction;
      while (this.isValidDirection(square, dx)) {
        let to = this.getMoveDirection(square, dx);
        if (this.isPieceAt(to, piece.constructor as typeof Piece, piece.color)) {
          break;
        }
        if (this.isEmpty(to)) {
          moves.push(new HyattMove(square, to, piece.color, piece));
        } else {
          if (!(piece instanceof Pawn) && this.isOpponentPiece(to, piece.color)) {
            moves.push(new HyattMove(square, to, piece.color, piece));
          }
          break;
        }
        // break cycle for knight, pawn, king
        if(piece instanceof Knight || piece instanceof Pawn || piece instanceof King)
          break;

        dx += direction;
      }
    });

    // pawn captures
    if(piece instanceof Pawn) {
      piece.getHyattCaptureDirections().forEach((direction) => {
        if (this.isValidDirection(square, direction)) {
          let dx = this.getMoveDirection(square, direction);
          if (!this.isEmpty(dx) && this.isOpponentPiece(dx, piece.color))
            moves.push(new HyattMove(square, dx, piece.color, piece));
        }
      });
    }

    // TODO: pawn captures "prise en passant"

    // TODO: king nogo moves

    return moves;
  }

  public processThreats(color: Color): number[] {
    this.threats = [];
    this.hyattTable.forEach((piece, square) => {
      if(piece && piece.color === color) {
        const moves = this.getPieceMoves(piece, square);
        moves.forEach(move => {
          this.threats.push(move.to);
        });
      }
    });

    return this.threats;
  }

}
