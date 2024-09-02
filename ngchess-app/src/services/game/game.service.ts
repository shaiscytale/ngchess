import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Game } from '../../models/game/game';
import { Player } from '../../models/players/player';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = 'https://localhost:7253';
  private game: Game | null = null;

  constructor(private http: HttpClient) {}

  createGame(player: Player): Observable<string> {
    return this.http.post(`${this.baseUrl}/game`, player.id, { responseType: 'text' });
  }
}
