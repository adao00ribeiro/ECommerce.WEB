import { OurserviceComponent } from './../../components/ourservice/ourservice.component';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { CarditemComponent } from '../../components/carditem/carditem.component';
import { CardsliderComponent } from '../../components/cardslider/cardslider.component';
import { IProduct } from '../../mock/IProduct';
import { BrandsComponent } from '../../components/brands/brands.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CarouselComponent, OurserviceComponent, CardsliderComponent, CarditemComponent, BrandsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

    productNews: IProduct[] = [
        {
            id: 1,
            name: "Camiseta básica",
            price: 19.99,
            imageUrl: "https://m.media-amazon.com/images/I/417S18ZulVL._AC_SX679_.jpg"
        },
        {
            id: 2,
            name: "Calça jeans",
            price: 39.99,
            imageUrl: "https://m.media-amazon.com/images/I/417S18ZulVL._AC_SX679_.jpg"
        },
        {
            id: 3,
            name: "Tênis esportivo",
            price: 59.99,
            imageUrl: "https://m.media-amazon.com/images/I/417S18ZulVL._AC_SX679_.jpg"
        },
        {
            id: 4,
            name: "Relógio de pulso",
            price: 79.99,
            imageUrl: "https://m.media-amazon.com/images/I/417S18ZulVL._AC_SX679_.jpg"
        },
        {
            id: 5,
            name: "Bolsa de couro",
            price: 99.99,
            imageUrl: "https://m.media-amazon.com/images/I/417S18ZulVL._AC_SX679_.jpg"
        },
        {
            id: 6,
            name: "Óculos de sol",
            price: 29.99,
            imageUrl: "https://m.media-amazon.com/images/I/417S18ZulVL._AC_SX679_.jpg"
        }
    ];
}
