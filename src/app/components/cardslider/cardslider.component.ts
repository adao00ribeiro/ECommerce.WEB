import { Component, OnInit } from '@angular/core';
import { CarditemComponent } from '../carditem/carditem.component';

@Component({
  selector: 'app-cardslider',
  standalone: true,
  imports: [CarditemComponent],
  templateUrl: './cardslider.component.html',
  styleUrl: './cardslider.component.scss'
})
export class CardsliderComponent implements OnInit {
  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000); // Optional automatic slide change
  }
  prevSlide() {

  }

  nextSlide() {

  }
}
