import { Component } from '@angular/core';
import { PanelleftComponent } from '../../components/dashboard/panelleft/panelleft.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PanelleftComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'dashboard';
}
