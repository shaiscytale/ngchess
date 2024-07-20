import { Color } from "../enums/Color.enum";
import { Bishop } from "../pieces/Bishop";
import { King } from "../pieces/King";
import { Knight } from "../pieces/Knight";
import { Pawn } from "../pieces/Pawn";
import { Move, Piece, Position } from "../pieces/Piece";
import { Queen } from "../pieces/Queen";
import { Rook } from "../pieces/Rook";


export class Board {
  private squares: (King | Queen | Rook | Bishop | Knight | Pawn | null)[][];

  constructor() {
    this.squares = Array(8).fill(null).map(() => Array(8).fill(null));
    this.resetBoard();
  }

  private resetBoard() {
    // place pieces - white side
    this.squares[0][0] = new Rook(Color.white);
    this.squares[0][1] = new Knight(Color.white);
    this.squares[0][2] = new Bishop(Color.white);
    this.squares[0][3] = new Queen(Color.white);
    this.squares[0][4] = new King(Color.white);
    this.squares[0][5] = new Bishop(Color.white);
    this.squares[0][6] = new Knight(Color.white);
    this.squares[0][7] = new Rook(Color.white);
    this.squares[1][0] = new Pawn(Color.white);
    this.squares[1][1] = new Pawn(Color.white);
    this.squares[1][2] = new Pawn(Color.white);
    this.squares[1][3] = new Pawn(Color.white);
    this.squares[1][4] = new Pawn(Color.white);
    this.squares[1][5] = new Pawn(Color.white);
    this.squares[1][6] = new Pawn(Color.white);
    this.squares[1][7] = new Pawn(Color.white);


    // place pieces - black side
    this.squares[7][0] = new Rook(Color.black);
    this.squares[7][1] = new Knight(Color.black);
    this.squares[7][2] = new Bishop(Color.black);
    this.squares[7][3] = new Queen(Color.black);
    this.squares[7][4] = new King(Color.black);
    this.squares[7][5] = new Bishop(Color.black);
    this.squares[7][6] = new Knight(Color.black);
    this.squares[7][7] = new Rook(Color.black);
    this.squares[6][0] = new Pawn(Color.black);
    this.squares[6][1] = new Pawn(Color.black);
    this.squares[6][2] = new Pawn(Color.black);
    this.squares[6][3] = new Pawn(Color.black);
    this.squares[6][4] = new Pawn(Color.black);
    this.squares[6][5] = new Pawn(Color.black);
    this.squares[6][6] = new Pawn(Color.black);
    this.squares[6][7] = new Pawn(Color.black);
  }

  public makeMove(move: Move){

  }
  public movePiece(from: Position, to: Position){
    let piece = this.getPiece(from.x, from.y);
    if(piece === null)
      throw new Error('No piece to move');

    piece.move(to.x, to.y);
  }

  public getPiece(x: number, y: number) : Piece | null {
    return this.squares[x][y];
  }

  public isValidPosition(x: number, y: number){
    return x >= 0 && x <= 7 && y >= 0 && y <= 7;
  }

  public displayBoard() {
    for (let i = 0; i < this.squares.length; i++) {
      let row = "";
      for (let j = 0; j < this.squares[i].length; j++) {
        row += this.squares[i][j] ? this.squares[i][j]?.getSymbol() : ".";
        row += " ";
      }
      console.log(row);
    }
  }
}
