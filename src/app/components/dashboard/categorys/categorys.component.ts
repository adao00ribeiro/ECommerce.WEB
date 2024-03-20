import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
@Component({
  selector: 'app-categorys',
  standalone: true,
  imports: [],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.scss'
})
export class CategorysComponent implements OnInit {


  constructor(private categoryService: CategoryService) {

  }
  ngOnInit(): void {
    this.categoryService.GetAll().then(data => console.log(data));
  }



}
