import { Component } from '@angular/core';
import { IOrder } from '../../../Interface/IOrder';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {
  orders : IOrder[] = [];
}
