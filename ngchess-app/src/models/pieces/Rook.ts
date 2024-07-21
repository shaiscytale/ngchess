import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece, Position } from "./Piece";

export class Rook extends Piece {

  constructor(color: Color){
    super('Rook', '	&#9814', '&#9820', color);
  }

  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    let possibleMoves: Move[] = [];
    const directions = [
      { dx: 1, dy: 0 }, // right
      { dx: -1, dy: 0 }, // left
      { dx: 0, dy: 1 }, // bot
      { dx: 0, dy: -1 } // top
    ];

    directions.forEach(({ dx, dy }) => {
      let x = currentX;
      let y = currentY;

      while (true) {
        x += dx;
        y += dy;

        if (!board.isValidPosition(x, y))
          break;

        const pieceAtPosition = board.getPiece(x, y);
        if (pieceAtPosition) {
          if (pieceAtPosition.color !== this.color) {
            possibleMoves.push(
              new Move(currentX, currentY, x, y));
          }
          break; // stop searching for moves : piece blocked by friendly piece
        }
        else {
          possibleMoves.push(
            new Move(currentX, currentY, x, y));
        }
      }
    });

    return possibleMoves;
  }

  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
