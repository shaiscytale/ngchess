import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from '../../models/board/board';
import { CommonModule } from '@angular/common';
import { Color } from '../../models/enums/Color.enum';
import { HyattMove, Move, Piece } from '../../models/pieces/Piece';
import { HyattBoard } from '../../models/board/hyattBoard';

@Component({
  selector: 'app-hyatt-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hyatt-board.component.html',
  styleUrl: './hyatt-board.component.scss'
})
export class HyattBoardComponent implements OnInit {
  board: HyattBoard;

  turn: Color = Color.white;
  selectedSquare: number | null = null;
  availableMoves: HyattMove[] = [];


  constructor() {
    this.board = new HyattBoard();
  }

  ngOnInit(): void {
      this.board.reset();
  }
  
  getSquareContent(square: number) : string {
    const piece = this.board.getPiece(square);

    if(piece === null)
      return '';

    return piece.getSymbol();
  }

  
  getBackgroundColor(square: number): string {
    if(this.isSquareAvailableMove(square)){
      return '#37d0de';
    } else if (this.selectedSquare 
      && this.selectedSquare === square) {
      return '#38f269';
    }
    return square % 2 === 0 ? '#f2ecdc' : '#99895d';
  }

  isSquareAvailableMove(square: number) : boolean {
    return this.availableMoves.some(move => move.to === square);
  }

  handleSquareClick(square: number) : void {
    if(this.isSquareAvailableMove(square)) {
      this.movePiece(square);
    } else {
      this.selectSquare(square);
    }
  }

  selectSquare(square: number) : void {
    console.log("select square", square);
    if(this.selectedSquare === square){
      this.unselectPiece();
    } else {
      const piece = this.board.getPiece(square);
      if(piece === null)
        return;
      if(piece.color !== this.turn) {
        console.log("not your turn !");
        return;
      }

      this.setSelectedPiece(piece, square);
    }

  }

  setSelectedPiece(piece: Piece, square: number) : void {
    console.log("setSelectedPiece");
    this.selectedSquare = square;
    this.board.selectPiece(piece);
    this.availableMoves = piece.getMoves(this.board, square);
  }

  unselectPiece(): void {
    this.selectedSquare = null;
  }

  movePiece(square: number): void {
    console.log("movePiece", square);
  }
}
