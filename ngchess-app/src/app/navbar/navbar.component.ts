import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Player } from '../../models/players/player';
import { UserInfoComponent } from '../user-info/user-info.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, UserInfoComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  player: Player | null = null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getPlayer().subscribe(player => {
      this.player = player;
    });
    console.log('NavbarComponent.ngOnInit', this.player);
  }

  isRegisterPage(): boolean {
    return this.router.url === '/register';
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  logout(): void {
    this.authService.logout();
    this.player = null;
  }
}
