import { AppModule } from './../app.module';
import { Component } from '@angular/core';
import { AuthService, RegisterCommand } from '../../services/auth/auth.service';


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

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.registerCommand).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error('Register failed', e),
      complete: () => console.log('Register successful')
    });
  }
}
