import { Color } from "../enums/Color.enum";
import { HyattMove, Move, Piece } from "../pieces/Piece";

export abstract class BaseBoard {
    abstract reset(): void;
    abstract movePiece(move: HyattMove) : void;
    abstract isValidPosition(square: number): boolean;
    abstract getPiece(square: number): Piece | null;
    abstract isEmpty(square: number): boolean;
    abstract isOpponentPiece(square: number, color: Color): boolean;
    abstract isPieceAt(square: number, pieceType: typeof Piece, color: Color): boolean;

    private selectedPiece: Piece | null = null;
    
    public selectPiece(piece: Piece | null) : void {
        this.selectedPiece = piece;
    }
}