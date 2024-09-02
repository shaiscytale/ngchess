import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { HyattMove, Move } from "../pieces/Piece";
import { Player } from "../players/player";

export class Game {
  whitePlayer: Player;
  blackPlayer: Player;

  board: Board | null;

  turn: Color = Color.white;

  moveHistory: Move[];
  hyattMoveHistory: HyattMove[];



  constructor(whitePlayer: Player, blackPlayer: Player) {
    this.whitePlayer = whitePlayer;
    this.blackPlayer = blackPlayer;
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
