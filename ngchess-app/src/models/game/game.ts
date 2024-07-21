import { Board } from "../board/board";
import { Move } from "../pieces/Piece";

export class Game {
  whitePlayerName: string;
  blackPlayerName: string;

  board: Board | null;
  moveHistory: Move[];



  constructor(whitePlayerName: string, blackPlayerName: string) {
    this.whitePlayerName = whitePlayerName;
    this.blackPlayerName = blackPlayerName;
    this.moveHistory = [];
    this.board = null;
  }

  public start() : void {
    this.board = new Board();
  }

  public isStarted() : boolean {
    return this.board !== null;
  }
}
