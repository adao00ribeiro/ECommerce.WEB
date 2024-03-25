import { FormControl, FormGroup } from '@angular/forms';
import { CategoryService } from './../../../services/category/category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addcategory',
  standalone: true,
  imports: [],
  templateUrl: './addcategory.component.html',
  styleUrl: './addcategory.component.scss'
})
export class AddcategoryComponent {

constructor(protected readonly CategoryService : CategoryService){}

async AddCategory(event: Event){
  event.preventDefault();

}

}
