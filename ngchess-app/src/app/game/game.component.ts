import { Component } from '@angular/core';
import { Board } from '../../models/board/board';
import { ChessBoardComponent } from '../chess-board/chess-board.component';
import { CommonModule } from '@angular/common';
import { Move } from '../../models/pieces/Piece';
import { Game } from '../../models/game/game';

@Component({
  selector: 'game',
  standalone: true,
  imports: [CommonModule, ChessBoardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  whitePlayer: string = 'whiteOne';
  blackPlayer: string = 'blackOne';

  game: Game | null = null;

  constructor() {
    this.startGame();
  }

  public startGame() {
    console.log("Starting game between", this.whitePlayer, "and", this.blackPlayer);
    this.game = new Game(this.whitePlayer, this.blackPlayer);
    this.game.start();
  }
}
