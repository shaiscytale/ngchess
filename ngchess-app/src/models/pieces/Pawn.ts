import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class Pawn extends Piece {

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
    [-1, 1].forEach((dx) => {
      if (board.isOpponentPiece(currentX + dx, currentY + direction, this.color)) {
        let diagMove = new Move(currentX, currentY, currentX + dx, currentY + direction, this.color, this);
        console.log("capture move : diag", diagMove);
        moves.push(diagMove);
      }
    });

    return moves;
  }

  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
