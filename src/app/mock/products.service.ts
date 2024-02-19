import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: IProduct[] = [
    { id: 1, name: 'Product 1', price: 10.99, imageUrl: 'assets/images/knife1.jpg' },
    { id: 2, name: 'Product 2', price: 20.49, imageUrl: 'assets/images/knife2.jpg' },
    { id: 3, name: 'Product 3', price: 15.79, imageUrl: 'assets/images/knife3.jpg' },

  ];
  constructor() { }
  getAllProducts(): any[] {
    return this.products;
  }
  addProduct(product: any): void {
    this.products.push(product);
  }

  getProductById(id: number): any {
    return this.products.find(product => product.id === id);
  }
}
