import { Component } from '@angular/core';
import { PanelleftComponent } from '../../components/dashboard/panelleft/panelleft.component';

import { RouterOutlet, provideRouter } from '@angular/router';

import { HomedashboardComponent } from '../../components/dashboard/homedashboard/homedashboard.component';
import { HeaderdashboardComponent } from '../../components/dashboard/headerdashboard/headerdashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PanelleftComponent, RouterOutlet, HomedashboardComponent, HeaderdashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'dashboard';
}
