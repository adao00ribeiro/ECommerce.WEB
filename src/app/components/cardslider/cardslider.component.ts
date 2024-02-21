import { Component, OnInit } from '@angular/core';
import { CarditemComponent } from '../carditem/carditem.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftCircle ,bootstrapArrowRightCircle} from '@ng-icons/bootstrap-icons'

@Component({
  selector: 'app-cardslider',
  standalone: true,
  imports: [CarditemComponent,NgIconComponent],
  viewProviders: [provideIcons({bootstrapArrowLeftCircle,bootstrapArrowRightCircle })],
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
