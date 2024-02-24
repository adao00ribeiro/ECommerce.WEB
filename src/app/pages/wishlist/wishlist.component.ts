import { Component } from '@angular/core';
import { GriditemsComponent } from '../../components/griditems/griditems.component';
import { IProduct } from '../../mock/IProduct';
import { CarditemComponent } from '../../components/carditem/carditem.component';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CarditemComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  products: IProduct[] = [
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
