import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class Bishop extends Piece {

  constructor(color: Color){
    super("Bishop", "B", color);
  }

  override getMoves(board: Board): Move[] {
    throw new Error("Method not implemented.");
  }
  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
