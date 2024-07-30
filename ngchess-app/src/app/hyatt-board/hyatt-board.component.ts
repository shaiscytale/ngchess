import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from '../../models/board/board';
import { CommonModule } from '@angular/common';
import { Color } from '../../models/enums/Color.enum';
import { HyattMove, Move, Piece } from '../../models/pieces/Piece';
import { HyattBoard } from '../../models/board/hyattBoard';
import { King } from '../../models/pieces/King';

@Component({
  selector: 'hyatt-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hyatt-board.component.html',
  styleUrl: './hyatt-board.component.scss'
})
export class HyattBoardComponent implements OnInit {
  board: HyattBoard;
  playerSide: Color = Color.white;
  turn: Color = Color.white;
  selectedSquare: number | null = null;
  availableMoves: HyattMove[] = [];
  currentThreats: number[] = [];
  isCheck: boolean = false;

  @Output() turnChanged = new EventEmitter<Color>();
  @Output() moveDone = new EventEmitter<HyattMove>();

  isWhitePlayer: boolean = true;

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
      let move = this.availableMoves.find(move => move.to === square);
      if(move?.piece instanceof King
        && this.currentThreats.some(threat => threat === square)) {
        return '#fc0f03';
      }
      return '#37d0de';
    } else if (this.selectedSquare
      && this.selectedSquare === square) {
      return '#38f269';
    }
    const row = Math.floor(square / 8);
    const col = square % 8;
    return (row + col) % 2 === 0 ? '#f2ecdc' : '#99895d';
  }

  isSquareAvailableMove(square: number) : boolean {
    return this.availableMoves.some(move => move.to === square);
  }

  handleSquareClick(square: number) : void {
    console.log("handleSquareClick", square);
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
    this.availableMoves = this.board.getPieceMoves(piece, square);//piece.getHyattMoves(this.board, square);
  }

  unselectPiece(): void {
    this.selectedSquare = null;
    this.availableMoves = [];
  }

  movePiece(square: number): void {
    console.log("movePiece", square);

    if(this.selectedSquare === null || this.availableMoves.length === 0)
      return;

    const move = this.availableMoves.find(move => move.to === square);
    if(move === undefined)
      return;

    this.board.movePiece(move);
    this.moveDone.emit(move);
    this.updateThreats();
    this.setNextPlayerTurn();
    this.unselectPiece();
  }

  private updateThreats(): void {
    this.currentThreats = this.board.processThreats(this.turn);
    // check : if king is in threat
    this.isCheck = this.currentThreats.some(threat => {
      const piece = this.board.getPiece(threat);
      if(piece instanceof King && piece.color !== this.turn) {
        console.log("check !");
        return true;
      } else {
        return false;
      }
    })
  }

  private setNextPlayerTurn(): void {
    this.turn = this.turn === Color.white ? Color.black : Color.white;
    this.turnChanged.emit(this.turn);
  }
}
