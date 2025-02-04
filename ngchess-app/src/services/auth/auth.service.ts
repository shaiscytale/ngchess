import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Player } from '../../models/players/player';
import { environment } from '../../environments/environment.dev';

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

  private playerSubject: BehaviorSubject<Player | null> = new BehaviorSubject<Player | null>(this.getPlayerFromLocalStorage());

  constructor(private http: HttpClient) { }

  register(registerCommand: RegisterCommand): Observable<Player> {
    return this.http.post(`${environment.baseUrl}/register`, registerCommand, { responseType: 'text' }).pipe(
      switchMap(playerId => this.getPlayerById(playerId))
    );
  }

  login(loginCommand: LoginCommand): Observable<Player> {
    console.log('login', loginCommand);
    return this.http.post(`${environment.baseUrl}/login`, loginCommand, { responseType: 'text' }).pipe(
      switchMap(playerId => this.getPlayerById(playerId))
    );
  }

  setPlayer(player: Player): void {
    this.playerSubject.next(player);
    localStorage.setItem('player', JSON.stringify(player));
  }

  getPlayerById(playerId: string): Observable<Player> {
    console.log('getPlayerById', playerId);
    return this.http.get<Player>(`${environment.baseUrl}/player/${playerId}`).pipe(
      map(player => {
        this.setPlayer(player);
        return player;
      })
    );
  }

  getPlayer(): Observable<Player | null> {
    return this.playerSubject.asObservable();
  }

  private getPlayerFromLocalStorage(): Player | null {
    const playerData = localStorage.getItem('player');
    return playerData ? JSON.parse(playerData) : null;
  }

  isLoggedIn(): boolean {
    return this.playerSubject.value !== null;
  }

  logout(): void {
    this.playerSubject.next(null);
    localStorage.removeItem('player');
  }
}
