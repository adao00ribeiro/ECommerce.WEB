import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listproducts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listproducts.component.html',
  styleUrl: './listproducts.component.scss'
})
export class ListproductsComponent {









  addproduct(){
    console.log('add')
  }
}
