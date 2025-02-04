import { Board } from "../board/board";
import { HyattBoard } from "../board/hyattBoard";
import { Color } from "../enums/Color.enum";
import { HyattMove, Move, Piece } from "./Piece";

export class Pawn extends Piece {
  override getHyattDirections(square: number): number[] {
    if(this.color === Color.white) {
      if(square < 16)
        return [10, 20];
      else
        return [10];
    } else {
      if(square >= 48)
        return [-10, -20];
      else
        return [-10];
    }
  }

  public getHyattCaptureDirections(): number[] {
    if(this.color === Color.white)
      return [9, 11];
    else
      return [-9, -11];
  }
  // override getHyattMoves(board: HyattBoard, currentSquare: number): HyattMove[] {
  //   throw new Error("Method not implemented.");
  // }

  constructor(color: Color){
    super('Pawn', 'P', '&#9817', '&#9823', color);
  }

  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    const moves: Move[] = [];
    const direction = this.isWhite() ? -1 : 1;
    const startRow = this.isWhite() ? 6 : 1;

    console.log("getMoves", currentX, currentY, direction, startRow);

    // simple 1 forward move
    if (board.isEmpty(currentX + direction, currentY)) {
      let forwardMove = new Move(currentX, currentY, currentX + direction, currentY, this.color, this);
      console.log("simple 1 forward move", forwardMove);
      moves.push(forwardMove);

      // start 2 forward move
      if ((this.isWhite() && currentX === startRow) || (!this.isWhite() && currentX === startRow) && board.isEmpty(currentX + 2 * direction, currentY)) {
        let forwardDoubleMove = new Move(currentX, currentY, currentX + 2 * direction, currentY, this.color, this);
        console.log("start 2 forward move", forwardDoubleMove);
        moves.push(forwardDoubleMove);
      }
    }

    // capture move : diag
    [-1, 1].forEach((dy) => {
      console.log("capture move check : currentX + dx, currentY + direction", currentX, dy, currentY, direction, this.color);
      if (board.isOpponentPiece(currentX + direction, currentY + dy, this.color)) {
        let diagMove = new Move(currentX, currentY, currentX + direction, currentY + dy, this.color, this);
        console.log("capture move : diag", diagMove);
        moves.push(diagMove);
      }
    });

    // TODO: implement "prise en passant"

    return moves;
  }
}
