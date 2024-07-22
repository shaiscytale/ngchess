import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";
import { Bishop } from "./Bishop";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Move, Piece } from "./Piece";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

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

    directions.forEach(({ dx, dy }) => {
      if(board.isValidPosition(dx, dy) && 
          (board.isEmpty(dx, dy) || 
          board.isOpponentPiece(dx, dy, this.color)
        )){
          let isValidMove = this.isValidKingMove(board, dx, dy, this.color);
          if(isValidMove){
            let move = new Move(currentX, currentY, dx, dy, this.color, this);
            possibleMoves.push(move);
          }
      }
    }); 

    return possibleMoves;
  }
  
  private isValidKingMove(board: Board, x: number, y: number, color: Color): boolean {
    // TODO : still to slow, too much operations
    
    const otherColor = color === Color.white ? Color.black : Color.white;


    // pawn's moves
    const pawnDirections = color === Color.white ? [[-1, -1], [-1, 1]] : [[1, -1], [1, 1]];
    for (const [dx, dy] of pawnDirections) {
      if (board.isPieceAt(x + dx, y + dy, typeof(Pawn), otherColor)) {
        return false;
      }
    }

    // knights dangerous moves
    const knightMoves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
    for (const [dx, dy] of knightMoves) {
      if (board.isPieceAt(x + dx, y + dy, typeof(Knight), otherColor)) {
        return false;
      }
    }

    // rook bishop & queen possible moves
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
    for (const [dx, dy] of directions) {
      let i = x + dx, j = y + dy;
      while (board.isValidPosition(i, j)) {
        if (!board.isEmpty(i, j)) {
          const piece = board.getPiece(i, j);
          if (piece && piece.color !== color && (typeof(piece) === typeof(Rook) && Math.abs(dx) + Math.abs(dy) === 1 || 
          typeof(piece) === typeof(Bishop)  && dx !== 0 && dy !== 0 || 
          typeof(piece) === typeof(Queen) )) {
            return false;
          }
          break;
        }
        i += dx;
        j += dy;
      }
    }

    // other king's moves
    const kingMoves = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for (const [dx, dy] of kingMoves) {
      if (board.isPieceAt(x + dx, y + dy, typeof(King), otherColor)) {
        return false;
      }
    }

    // no check, so return true
    return true;
    
    // TODO : optimize this
    // for (let i = 0; i < 8; i++) {
    //   for (let j = 0; j < 8; j++) {
    //     const piece = board.getPiece(i, j);
    //     if (piece && piece.color !== color) {
    //       const moves = piece.getMoves(board, i, j);
    //       for (const move of moves) {
    //         if (move.toX === x && move.toY === y) {
    //           return true; 
    //         }
    //       }
    //     }
    //   }
    // }
    // return false;
  }

  override move(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
}
