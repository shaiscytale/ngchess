import { Board } from "../board/board";
import { HyattBoard } from "../board/hyattBoard";
import { Color } from "../enums/Color.enum";
import { HyattMove, Move, Piece, Position } from "./Piece";

export class Rook extends Piece {

  override getHyattDirections(square: number): number[] {
    return [1, 10, -1, -10];
  }
  // override getHyattMoves(board: HyattBoard, currentSquare: number): HyattMove[] {
  //   throw new Error("Method not implemented.");
  // }

  constructor(color: Color) {
    super('Rook', 'R', '	&#9814', '&#9820', color);
  }

  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    let possibleMoves: Move[] = [];
    const directions = [
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 }
    ];

    directions.forEach(({ dx, dy }) => {
      let x = currentX;
      let y = currentY;

      while (true) {
        x += dx;
        y += dy;

        if (!board.isValidPosition(x, y))
          break;

        const targetPiece = board.getPiece(x, y);
        if (targetPiece) {
          if (targetPiece.color !== this.color) {
            possibleMoves.push(
              new Move(currentX, currentY, x, y, this.color, this));
          }
          break; // stop searching for moves : piece blocked by friendly piece
        }
        else {
          possibleMoves.push(
            new Move(currentX, currentY, x, y, this.color, this));
        }
      }
    });

    return possibleMoves;
  }

}
