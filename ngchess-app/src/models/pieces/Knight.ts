import { Board } from "../board/board";
import { HyattBoard } from "../board/hyattBoard";
import { Color } from "../enums/Color.enum";
import { HyattMove, Move, Piece } from "./Piece";

export class Knight extends Piece {
  override getHyattDirections(square: number): number[] {
    return [-12, -21, -19, -8, 12, 21, 19, 8];
  }
  // override getHyattMoves(board: HyattBoard, currentSquare: number): HyattMove[] {
  //   throw new Error("Method not implemented.");
  // }

  constructor(color: Color){
    super('Knight', 'N', '&#9816', '&#9822', color);
  }

  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    const possibleMoves: Move[] = [];
    const moveOffsets = [
      { dx: -2, dy: -1 }, { dx: -2, dy: 1 },
      { dx: -1, dy: -2 }, { dx: -1, dy: 2 },
      { dx: 1, dy: -2 }, { dx: 1, dy: 2 },
      { dx: 2, dy: -1 }, { dx: 2, dy: 1 }
    ];

    for (const { dx, dy } of moveOffsets) {
      const newX = currentX + dx;
      const newY = currentY + dy;
      if (board.isValidPosition(newX, newY)) {
        const targetPiece = board.getPiece(newX, newY);
        if (targetPiece === null || targetPiece.color !== this.color) {
          possibleMoves.push(new Move(currentX, currentY, newX, newY, this.color, this));
        }
      }
    }

    return possibleMoves;
  }
}
