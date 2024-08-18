import { Component } from '@angular/core';
import { AuthService, LoginCommand } from '../../services/auth/auth.service';
import { AppModule } from './../app.module';
import { Router } from '@angular/router';
import { Player } from '../../models/players/player';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginCommand: LoginCommand = {
    Pseudo: '',
    PasswordHash: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router) { }

  login() {
    this.authService.login(this.loginCommand).subscribe({
      next: (player: Player) => {
        console.log('Login successful', player);
        this.router.navigate(['/']);
      },
      error: (e) => console.error('Login failed', e)
    });
  }
}
