import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngchess-app';

  isRegisterPage(): boolean {
    return this.router.url === '/register';
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  constructor(private router: Router) {

  }
}
