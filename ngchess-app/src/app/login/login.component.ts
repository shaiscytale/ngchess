import { Component } from '@angular/core';
import { AuthService, LoginCommand } from '../../services/auth/auth.service';
import { AppModule } from './../app.module';

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

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.loginCommand).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error('Login failed', e),
      complete: () => console.log('Login successful')
    });
  }
}
