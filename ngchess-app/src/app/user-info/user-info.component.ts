import { Component, Input } from '@angular/core';
import { Player } from '../../models/players/player';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent {
  @Input() player: Player | null = null;
  defaultAvatarUrl: string = 'https://cdn.vectorstock.com/i/500p/27/54/anonymous-icon-privacy-concept-human-head-vector-27772754.jpg';
}
