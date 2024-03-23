import { API } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { ICategory } from '../../Interface/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  async GetAll() {
    return fetch(API + '/category/all')
      .then((response) =>
        response.json()
      )
      .catch((error) => {
        console.error('Error fetching data:', error);
        return null; // Or throw an error
      });
  }

  async Create(category: ICategory) {
    return fetch(API + '/category', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indica que o corpo da requisição é JSON
      },
      body: JSON.stringify(category), // Converte o objeto 
    })
      .then((response) =>
        response.json()
      )
      .catch((error) => {
        console.error('Error fetching data:', error);
        return null; // Or throw an error
      });
  }
  async GetById(id: string) {
    return fetch(API + '/category')
      .then((response) =>
        response.json()
      )
      .catch((error) => {
        console.error('Error fetching data:', error);
        return null; // Or throw an error
      });
  }
  async Update(id: string) {
    return fetch(API + '/category')
      .then((response) =>
        response.json()
      )
      .catch((error) => {
        console.error('Error fetching data:', error);
        return null; // Or throw an error
      });
  }
  async Delete(id: string) {
    return fetch(API + '/category')
      .then((response) =>
        response.json()
      )
      .catch((error) => {
        console.error('Error fetching data:', error);
        return null; // Or throw an error
      });
  }
}
