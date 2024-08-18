import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, GameComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngchess-app';

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }


  constructor(private router: Router, private authService: AuthService) {

  }
}
