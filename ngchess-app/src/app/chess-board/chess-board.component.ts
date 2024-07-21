import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../../models/board/board';
import { CommonModule } from '@angular/common';
import { Color } from '../../models/enums/Color.enum';
import { Move, Piece } from '../../models/pieces/Piece';

@Component({
  selector: 'chess-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss'
})
export class ChessBoardComponent implements OnInit {
  @Input() board!: Board;

  turn: Color = Color.white;
  selectedSquare: { x: number, y: number } | null = null;
  availableMoves: Move[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  getSquareContent(x: number, y: number) : string {
    const piece = this.board.getPiece(x, y);

    if(piece === null)
      return '';

    return piece.getSymbol();
  }

  getBackgroundColor(x: number, y: number): string {
    if(this.isSquareAvailableMove(x, y)){
      return '#37d0de';
    } else if (this.selectedSquare && this.selectedSquare.x === x && this.selectedSquare.y === y) {
      return '#38f269';
    }
    return (x + y) % 2 === 0 ? '#f2ecdc' : '#99895d';
  }

  isSquareAvailableMove(x: number, y: number): boolean {
    return this.availableMoves.some(move => move.toX === x && move.toY === y);
  }

  selectSquare(x: number, y: number): void {
    console.log("selectSquare", x, y);
    if (this.selectedSquare && this.selectedSquare.x === x && this.selectedSquare.y === y) {
      this.selectedSquare = null;
      this.unselectPiece();
    } else {
      const piece = this.board.getPiece(x, y);
      if(piece === null || piece.color !== this.turn)
        return;

      this.selectedSquare = { x, y };
      this.setSelectedPiece(piece, x, y);
    }
  }

  private setSelectedPiece(piece: Piece, x: number, y: number) : void {
    this.availableMoves = piece.getMoves(this.board, x, y);
  }

  private unselectPiece(): void {
    this.availableMoves = [];
  }
}
