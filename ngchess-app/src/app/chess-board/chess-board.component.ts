import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() turnChanged = new EventEmitter<Color>();
  @Output() moveDone = new EventEmitter<Move>();

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

  handleSquareClick(x: number, y: number): void {
    if (this.isSquareAvailableMove(x, y)) {
      this.movePiece(x, y);
    } else {
      this.selectSquare(x, y);
    }
  }

  selectSquare(x: number, y: number): void {
    console.log("selectSquare", x, y);
    if (this.selectedSquare && this.selectedSquare.x === x && this.selectedSquare.y === y) {
      this.unselectPiece();
    } else {
      const piece = this.board.getPiece(x, y);
      if(piece === null)
        return;
      if(piece.color !== this.turn) {
        console.log("Not your turn");
        return;
      }

      this.setSelectedPiece(piece, x, y);
    }
  }

  public movePiece(x: number, y: number): void {
    console.log("movePiece", x, y);
    if(this.selectedSquare === null || this.availableMoves.length === 0)
      return;

    const move = this.availableMoves.find(move => move.toX === x && move.toY === y);
    if(move === undefined)
      return;

    this.board.movePiece(move);
    this.moveDone.emit(move);
    this.setNextPlayerTurn();
    this.unselectPiece();
  }

  private setNextPlayerTurn(): void {
    this.turn = this.turn === Color.white ? Color.black : Color.white;
    this.turnChanged.emit(this.turn);
  }

  private setSelectedPiece(piece: Piece, x: number, y: number) : void {
    console.log("setSelectedPiece");
    this.selectedSquare = { x, y };
    this.board.selectPiece(piece);
    this.availableMoves = piece.getMoves(this.board, x, y);
  }

  private unselectPiece(): void {
    console.log("unselectPiece");
    this.selectedSquare = null;
    this.board.selectPiece(null);
    this.availableMoves = [];
  }
}
