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
  products : IProduct[] = []
}
