import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { HyattMove, Move } from "../pieces/Piece";

export class Game {
  whitePlayerName: string;
  blackPlayerName: string;

  board: Board | null;

  turn: Color = Color.white;

  moveHistory: Move[];
  hyattMoveHistory: HyattMove[];



  constructor(whitePlayerName: string, blackPlayerName: string) {
    this.whitePlayerName = whitePlayerName;
    this.blackPlayerName = blackPlayerName;
    this.moveHistory = [];
    this.hyattMoveHistory = [];
    this.board = null;
  }

  public start() : void {
    this.board = new Board();
  }

  public isStarted() : boolean {
    return this.board !== null;
  }

  public isWhiteTurn() : boolean {
    return this.turn === Color.white;
  }
}
