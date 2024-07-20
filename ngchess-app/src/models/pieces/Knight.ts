import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class Knight extends Piece {

  constructor(color: Color){
    super('Knight', 'N', color);
  }

  override getMoves(board: Board): Move[] {
    throw new Error("Method not implemented.");
  }
  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
