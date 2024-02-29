import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionNotifications} from '@ng-icons/ionicons'
@Component({
  selector: 'app-headerdashboard',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ ionNotifications})],
  templateUrl: './headerdashboard.component.html',
  styleUrl: './headerdashboard.component.scss'
})
export class HeaderdashboardComponent {

}
