import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Player } from '../../models/players/player';

export interface RegisterCommand {
  Firstname: string;
  Lastname: string;
  Pseudo: string;
  PasswordHash: string;
  Email: string;
}

export interface LoginCommand {
  Pseudo: string;
  PasswordHash: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl = 'https://localhost:7253';
  private player: Player | null = null;

  constructor(private http: HttpClient) { }

  register(registerCommand: RegisterCommand): Observable<Player> {
    return this.http.post(`${this.baseUrl}/register`, registerCommand, { responseType: 'text' }).pipe(
      switchMap(playerId => this.getPlayerById(playerId))
    );
  }

  login(loginCommand: LoginCommand): Observable<Player> {
    console.log('login', loginCommand);
    return this.http.post(`${this.baseUrl}/login`, loginCommand, { responseType: 'text' }).pipe(
      switchMap(playerId => this.getPlayerById(playerId))
    );
  }

  setPlayer(player: Player): void {
    this.player = player;
    localStorage.setItem('player', JSON.stringify(player));
  }

  getPlayerById(playerId: string): Observable<Player> {
    console.log('getPlayerById', playerId);
    return this.http.get<Player>(`${this.baseUrl}/player/${playerId}`).pipe(
      map(player => {
        this.setPlayer(player);
        return player;
      })
    );
  }

  getPlayer(): Player | null {
    if (this.player) {
      return this.player;
    }
    const playerData = localStorage.getItem('player');
    return playerData ? JSON.parse(playerData) : null;
  }

  isLoggedIn(): boolean {
    return this.getPlayer() !== null;
  }

  logout(): void {
    this.player = null;
    localStorage.removeItem('player');
  }
}
