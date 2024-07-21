import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../../models/board/board';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chess-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss'
})
export class ChessBoardComponent implements OnInit {
  @Input() board!: Board;

  constructor() { }

  ngOnInit(): void {

  }

  getSquareContent(x: number, y: number) : string {
    const piece = this.board.getPiece(x, y);

    if(piece === null)
      return '';

    return piece.code;
  }

  getBackgroundColor(x: number, y: number): string {
    return (x + y) % 2 === 0 ? '#f2ecdc' : '#99895d';
  }
}
