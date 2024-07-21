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
  whiteCode: string;
  blackCode: string;
  color: Color;
  position: Position | undefined;

  constructor(name: string, whiteCode: string, blackCode: string, color: Color){
    this.name = name;
    this.whiteCode = whiteCode;
    this.blackCode = blackCode;
    this.color = color;
  }

  abstract getMoves(board: Board): Move[];
  abstract move(x: number, y: number): void;

  getSymbol(): string {
    return this.color === Color.white ? this.whiteCode : this.blackCode;
  }

  place(position: Position){
    this.position = position;
  }
}

