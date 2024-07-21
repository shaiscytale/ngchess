import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class King extends Piece {

  constructor(color: Color){
    super('King', '&#9812', '&#9818', color);
  }
  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    throw new Error("Method not implemented.");
  }
  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
