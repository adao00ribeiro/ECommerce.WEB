import { OurserviceComponent } from './../../components/ourservice/ourservice.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CarditemComponent } from '../../components/carditem/carditem.component';
import { CardsliderComponent } from '../../components/cardslider/cardslider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, OurserviceComponent, CardsliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
