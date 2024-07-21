import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from '../models/board/board';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngchess-app';

  gameStarted: boolean = false;

  constructor() {

  }

  public createNewGame() {
    this.gameStarted = true;
  }
}
