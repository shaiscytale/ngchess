import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { SignalrClient, SignalrConnection } from 'ngx-signalr-websocket';
import { Game } from '../../models/game/game';
import { Player } from '../../models/players/player';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private hubConnection?: SignalrConnection;

  constructor(private http: HttpClient) {
    const client = SignalrClient.create(http);

    client.connect(environment.gameHubUrl).subscribe(
      connection => {
        this.hubConnection = connection;

        // link methods to hubMessages here
        // the other player has joined the game ?
        // receive game uupdate ?
        // the game has started ?
        // the other player has left the game ?
        // the other player has made a move ?
        // the game is over ?
      }
    )

  }

  joinGame(player: Player, gameId: string): void {
    this.hubConnection?.send('JoinGame', player.id, gameId);
  }



  createGame(player: Player): Observable<string> {
    return this.http.post(`${environment.baseUrl}/game`, player.id, { responseType: 'text' });
  }
}
