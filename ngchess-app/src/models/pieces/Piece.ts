import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";

export class Move {
  from: string;
  to: string;
  code: string;
  points: number | undefined;

  constructor(from: string, to: string, code: string, points?: number){
    this.from = from;
    this.to = to;
    this.code = code;
    this.points = points;
  }
}

export abstract class Piece {
  name: string;
  code: string;
  color: Color;

  constructor(name: string, code: string, color: Color){
    this.name = name;
    this.code = code;
    this.color = color;
  }

  abstract getMoves(board: Board): Move[];
  abstract move(move: Move): void;
  getSymbol(): string {
    return this.color === Color.white ? this.code.toUpperCase() : this.code.toLowerCase();
  }

}

