import { Component } from '@angular/core';
import { PanelleftComponent } from '../../components/dashboard/panelleft/panelleft.component';

import { RouterOutlet, provideRouter } from '@angular/router';

import { HomedashboardComponent } from '../../components/dashboard/homedashboard/homedashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PanelleftComponent, RouterOutlet, HomedashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'dashboard';
}
