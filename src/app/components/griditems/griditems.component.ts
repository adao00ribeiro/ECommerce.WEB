import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTableCells, faList } from '@fortawesome/free-solid-svg-icons';
import { CarditemComponent } from '../carditem/carditem.component';
import { ProductsService } from '../../mock/products.service';
import { IProduct } from '../../mock/IProduct';

@Component({
  selector: 'app-griditems',
  standalone: true,
  imports: [FontAwesomeModule, CarditemComponent],
  templateUrl: './griditems.component.html',
  styleUrl: './griditems.component.scss'
})
export class GriditemsComponent {
  faGrid = faTableCells
  faList = faList

  products: IProduct[] = []; // Definindo o tipo como IProduct[]


  constructor(private productsService: ProductsService) {
    this.products = productsService.getAllProducts();
  }

}
