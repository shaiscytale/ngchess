import { AppModule } from './../app.module';
import { Component } from '@angular/core';
import { AuthService, RegisterCommand } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Player } from '../../models/players/player';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerCommand: RegisterCommand = {
    Firstname: '',
    Lastname: '',
    Pseudo: '',
    PasswordHash: '',
    Email: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router) { }

  register() {
    this.authService.register(this.registerCommand).subscribe({
      next: (player: Player) => {
        console.log('Registration successful', player);
        this.router.navigate(['/']);
      },
      error: (e) => console.error('Registration failed', e)
    });
  }
}
