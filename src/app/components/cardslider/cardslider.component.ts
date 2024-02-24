import { Component, Input, OnInit } from '@angular/core';
import { CarditemComponent } from '../carditem/carditem.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { bootstrapArrowLeftCircle, bootstrapArrowRightCircle } from '@ng-icons/bootstrap-icons'
import { IProduct } from '../../mock/IProduct';

@Component({
  selector: 'app-cardslider',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({ bootstrapArrowLeftCircle, bootstrapArrowRightCircle })],
  templateUrl: './cardslider.component.html',
  styleUrl: './cardslider.component.scss'
})
export class CardsliderComponent implements OnInit {


  currentIndex = 0;

  ngOnInit(): void {

  }
  prevSlide() {

  }

  nextSlide() {

  }
}
