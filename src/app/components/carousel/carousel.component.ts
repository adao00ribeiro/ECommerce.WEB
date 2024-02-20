import { Component, Input, OnInit } from '@angular/core';
import { ICaroselImage } from './interface/ICaroselImage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {

  @Input() images: ICaroselImage[] = [
    { src: 'assets/images/teste/banner1.jpg', alt: 'Image 1' },
    { src: 'assets/images/teste/banner2.webp', alt: 'Image 2' },
  ];

  currentIndex = 0;

  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000); // Optional automatic slide change
  }
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
