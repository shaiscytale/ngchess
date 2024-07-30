import { Board } from "../board/board";
import { HyattBoard } from "../board/hyattBoard";
import { Color } from "../enums/Color.enum";

export class HyattMove {
  from: number;
  to: number;
  color: Color;
  piece: Piece;
  code: string | undefined;
  points: number | undefined;

  constructor(from: number, to: number, color: Color, piece: Piece){
    this.from = from;
    this.to = to;
    this.color = color;
    this.piece = piece;

    this.generateCode();
  }

  private generateCode(): void {
    let fromCode = "";
    let toCode = "";
    let pieceCode = "";
    this.code = `${pieceCode}${fromCode}${toCode}`;
  }
}

export class Move {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  color: Color;
  piece: Piece;
  code: string | undefined;
  points: number | undefined;

  constructor(fromX: number, fromY: number, toX: number, toY: number, color: Color, piece: Piece){
    this.fromX = fromX;
    this.fromY = fromY;
    this.toX = toX;
    this.toY = toY;
    this.color = color;
    this.piece = piece;
    this.generateCode();
  }

  private generateCode(): void {
    this.code = `${this.piece.shortCode}${this.getAlgebraicY(this.fromY)}${this.getAlgebraicX(this.fromX)}-${this.getAlgebraicY(this.toY)}${this.getAlgebraicX(this.toX)}`;
  }

  private getAlgebraicX(x: number): string {
    const xCodes = ['8', '7', '6', '5', '4', '3', '2', '1'];
    let alCode = xCodes[x];
    return alCode;
  }

  private getAlgebraicY(y: number): string {
    const yCodes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let alCode = yCodes[y];
    return alCode;
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
  shortCode: string;
  whiteCode: string;
  blackCode: string;
  color: Color;
  position: Position | undefined;

  constructor(name: string, shortCode: string, whiteCode: string, blackCode: string, color: Color){
    this.name = name;
    this.shortCode = color === Color.white ? shortCode.toUpperCase() : shortCode.toLowerCase();
    this.whiteCode = whiteCode;
    this.blackCode = blackCode;
    this.color = color;
  }

  abstract getMoves(board: Board, currentX: number, currentY: number): Move[];
  // abstract getHyattMoves(board: HyattBoard, currentSquare: number): HyattMove[];
  abstract getHyattDirections(square: number) : number[];

  getSymbol(): string {
    return this.color === Color.white ? this.whiteCode : this.blackCode;
  }

  public isWhite(): boolean {
    return this.color === Color.white;
  }

  place(position: Position){
    this.position = position;
  }
}

