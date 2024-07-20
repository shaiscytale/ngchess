import { Board } from "../board/board";
import { Color } from "../enums/Color.enum";

export class Move {
  from: Position;
  to: Position;
  code: string | undefined;
  points: number | undefined;

  constructor(from: Position, to: Position, code?: string, points?: number){
    this.from = from;
    this.to = to;
    this.code = code;
    this.points = points;
  }
}

export class Position {
  x: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  y: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

  constructor(x: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, y: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7) {
    this.x = x;
    this.y = y;
  }
}

export abstract class Piece {
  name: string;
  code: string;
  color: Color;
  position: Position | undefined;

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

  place(position: Position){
    this.position = position;
  }
}

