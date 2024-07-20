import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class Pawn extends Piece {

  constructor(color: Color){
    super("Pawn", "P", color);
  }

  override getMoves(board: Board): Move[] {
    throw new Error("Method not implemented.");
  }
  override move(move: Move): void {
    throw new Error("Method not implemented.");
  }
}
