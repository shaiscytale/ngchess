import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class King extends Piece {

  constructor(color: Color){
    super('King', 'K', '&#9812', '&#9818', color);
  }
  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    const result: Move[] = [];
    const moves: Move[] = [];
    const top =  currentX - 1;
    const bot = currentX + 1;
    const left =  currentY - 1;
    const right = currentY + 1;

    // simple all direction moves
    moves.push(new Move(currentX, currentY, top, currentY, this.color, this));
    moves.push(new Move(currentX, currentY, top, right, this.color, this));
    moves.push(new Move(currentX, currentY, currentX, right, this.color, this));
    moves.push(new Move(currentX, currentY, bot, right, this.color, this));
    moves.push(new Move(currentX, currentY, bot, currentY, this.color, this));
    moves.push(new Move(currentX, currentY, bot, left, this.color, this));
    moves.push(new Move(currentX, currentY, currentX, left, this.color, this));
    moves.push(new Move(currentX, currentY, top, left, this.color, this));

    // ne garder que les moves (piece friendly)
    moves.forEach((move) => {
      if(board.isValidPosition(move.toX, move.toY) && 
          this.isValidKingMove(move) && 
          (board.isEmpty(move.toX, move.toY) || 
          board.isOpponentPiece(move.toX, move.toY, move.color)
        )){
        result.push(move);
      }
    });

    return result;
  }
  
  private isValidKingMove(move: Move): boolean {
    // TODO : virer les moves qui mettent en echec
    return true;
  }
  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
