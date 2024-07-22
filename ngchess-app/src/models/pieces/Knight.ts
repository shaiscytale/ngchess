import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class Knight extends Piece {

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
  
  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
