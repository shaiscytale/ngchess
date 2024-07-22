import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Move, Piece } from "./Piece";

export class King extends Piece {

  constructor(color: Color){
    super('King', 'K', '&#9812', '&#9818', color);
  }
  override getMoves(board: Board, currentX: number, currentY: number): Move[] {
    let possibleMoves: Move[] = [];
    const top =  currentX - 1;
    const bot = currentX + 1;
    const left =  currentY - 1;
    const right = currentY + 1;
    const directions = [
      { dx: top, dy: currentY },
      { dx: top, dy: right },
      { dx: currentX, dy: right },
      { dx: bot, dy: right },
      { dx: bot, dy: currentY },
      { dx: bot, dy: left },
      { dx: currentX, dy: left },
      { dx: top, dy: left },
    ];

    // ne garder que les moves (piece friendly)
    directions.forEach(({ dx, dy }) => {
      if(board.isValidPosition(dx, dy) && 
          this.isValidKingMove(dx, dy, this.color) && 
          (board.isEmpty(dx, dy) || 
          board.isOpponentPiece(dx, dy, this.color)
        )){
          let move = new Move(currentX, currentY, dx, dy, this.color, this);
          possibleMoves.push(move);
      }
    });

    return possibleMoves;
  }
  
  private isValidKingMove(x: number, y: number, color: Color): boolean {
    // TODO : virer les moves qui mettent en echec
    return true;
  }
  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
