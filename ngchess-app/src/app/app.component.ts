import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Board } from '../models/board/board';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ChessBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngchess-app';
  board: Board | null = null;

  constructor() {

  }

  public createNewGame() {
    this.board = new Board();
  }
}
