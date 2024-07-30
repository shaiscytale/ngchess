import { Component } from '@angular/core';
import { ChessBoardComponent } from '../chess-board/chess-board.component';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game/game';
import { FormsModule } from '@angular/forms';
import { Color } from '../../models/enums/Color.enum';
import { HyattMove, Move } from '../../models/pieces/Piece';
import { HyattBoardComponent } from "../hyatt-board/hyatt-board.component";

@Component({
  selector: 'game',
  standalone: true,
  imports: [CommonModule, ChessBoardComponent, FormsModule, HyattBoardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  whitePlayer: string = '';
  blackPlayer: string = '';

  currentTurnColor: Color = Color.white;

  game: Game | null = null;

  constructor() {

  }

  public startGame() {
    console.log("Starting game between", this.whitePlayer, "and", this.blackPlayer);
    this.game = new Game(this.whitePlayer, this.blackPlayer);
    this.game.start();
  }

  handleTurnChanged(newTurnColor: Color) {
    console.log("Turn changed to", newTurnColor);
    this.currentTurnColor = newTurnColor;
  }

  handleMoveDone(move: Move) {
    console.log("Move done", move);
    this.game?.moveHistory.push(move);
  }
  handleHyattMoveDone(move: HyattMove) {
    console.log("Move done", move);
    this.game?.hyattMoveHistory.push(move);
  }

  isWhiteTurn() {
    return this.currentTurnColor === Color.white;
  }
}
