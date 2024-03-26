import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { bootstrapArrowDown, bootstrapArrowUp } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-carditem',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
  viewProviders: [provideIcons({ bootstrapArrowUp, bootstrapArrowDown })],
  templateUrl: './carditem.component.html',
  styleUrl: './carditem.component.scss'
})
export class CarditemComponent {
  @Input()
  id = 0;
  @Input()
  name = '';
  @Input()
  price = 0.0;
  @Input()
  imageUrl = '';


  desconto() {
    return this.price - (this.price * 0.12); // Calcula o desconto de 12%
  }
}
