import { API } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor() { }


async GetAll(){
 return fetch(API+'/product')
  .then((response)=>
  response.json()
  )
  .catch((error)=>{
    console.error('Error fetching data:', error);
        return null; // Or throw an error
  });
}
}
