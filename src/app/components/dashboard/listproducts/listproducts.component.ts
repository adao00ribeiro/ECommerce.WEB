
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../../mock/IProduct';
import { ProductsService } from '../../../mock/products.service';


@Component({
  selector: 'app-listproducts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listproducts.component.html',
  styleUrl: './listproducts.component.scss'
})
export class ListproductsComponent implements OnInit {

products : IProduct[] = []

constructor(private readonly ProductService: ProductsService){

}
  ngOnInit(): void {
    this.products = this.ProductService.getAllProducts();
  }





  addproduct(){
    console.log('add')
  }
}
