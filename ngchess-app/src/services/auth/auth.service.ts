import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  register(registerCommand: RegisterCommand): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerCommand);
  }

  login(loginCommand: LoginCommand): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginCommand);
  }
}
