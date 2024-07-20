import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece, Position } from "./Piece";

export class Rook extends Piece {

  constructor(color: Color){
    super("Rook", "R", color);
  }

  override getMoves(board: Board): Move[] {
    if(this.position === undefined)
      throw new Error("This piece is not on a board.");

    let possibleMoves: Move[] = [];
    const directions = [
      { dx: 1, dy: 0 }, // right
      { dx: -1, dy: 0 }, // left
      { dx: 0, dy: 1 }, // bot
      { dx: 0, dy: -1 } // top
    ];

    const currentPosition = this.position;

    directions.forEach(({ dx, dy }) => {
      let x = currentPosition.x;
      let y = currentPosition.y;

      while (true) {
        x += dx;
        y += dy;

        if (!board.isValidPosition(x, y))
          break;

        const pieceAtPosition = board.getPiece(x, y);
        if (pieceAtPosition) {
          if (pieceAtPosition.color !== this.color) {
            possibleMoves.push(
              new Move(
                currentPosition,
                new Position(x as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, y as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)));
          }
          break; // stop searching for moves : piece blocked by friendly piece
        }
        else {
          possibleMoves.push(
            new Move(
              currentPosition,
              new Position(x as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, y as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7)));
        }
      }
    });

    return possibleMoves;
  }
  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
