import { Board } from "../board/board";
import { HyattBoard } from "../board/hyattBoard";
import { Color } from "../enums/Color.enum";
import { HyattMove, Move, Piece } from "./Piece";

export class Bishop extends Piece {
  override getHyattDirections(square: number): number[] {
    return [9, 11, -11, -9];
  }
  // override getHyattMoves(board: HyattBoard, currentSquare: number): HyattMove[] {
  //   throw new Error("Method not implemented.");
  // }

  constructor(color: Color){
    super('Bishop', 'B', '&#9815', '&#9821', color);
  }

  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    let possibleMoves: Move[] = [];
    const directions = [
      { dx: -1, dy: -1 },
      { dx: -1, dy: 1 },
      { dx: 1, dy: -1 },
      { dx: 1, dy: 1 }
    ];

    for (const { dx, dy } of directions) {
      let x = currentX + dx;
      let y = currentY + dy;
      while (x >= 0 && x < 8 && y >= 0 && y < 8) {
        const piece = board.getPiece(x, y);
        if (piece === null) {
          possibleMoves.push(new Move(currentX, currentY, x, y, this.color, this));
        } else {
          if (piece.color !== this.color) {
            possibleMoves.push(new Move(currentX, currentY, x, y, this.color, this));
          }
          break; // stop search here
        }
        x += dx;
        y += dy;
      }
    }

    return possibleMoves;
  }
}
