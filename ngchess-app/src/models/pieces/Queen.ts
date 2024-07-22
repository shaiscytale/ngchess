import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class Queen extends Piece {

  constructor(color: Color){
    super('Queen', 'Q', '&#9813', '&#9819', color);
  }
  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    const possibleMoves: Move[] = [];
    const directions = [
      { dx: -1, dy: -1 }, 
      { dx: -1, dy: 1 }, 
      { dx: 1, dy: -1 }, 
      { dx: 1, dy: 1 }, 
      { dx: 0, dy: -1 }, 
      { dx: 0, dy: 1 }, 
      { dx: -1, dy: 0 }, 
      { dx: 1, dy: 0 }
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
          break; 
        }
        x += dx;
        y += dy;
      }
    }

    return possibleMoves;
  }
  
  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
