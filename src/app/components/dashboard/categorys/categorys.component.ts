import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category/category.service';
import { ICategory } from '../../../Interface/ICategory';
@Component({
  selector: 'app-categorys',
  standalone: true,
  imports: [],
  templateUrl: './categorys.component.html',
  styleUrl: './categorys.component.scss'
})
export class CategorysComponent implements OnInit {

  categorys : ICategory[] = [];

  constructor(private categoryService: CategoryService) {

  }
  ngOnInit(): void {
    this.categoryService.GetAll()
    .then(data =>  this.categorys = [{ id: "1", name: 'Tecnologia', slug: 'tecnologia' },
    { id: "2", name: 'Esportes', slug: 'esportes' },
    { id: "3", name: 'Entretenimento', slug: 'entretenimento' },
    { id: "4", name: 'Saúde e Bem-estar', slug: 'saude-bem-estar' },
    { id: "5", name: 'Moda', slug: 'moda' }])

    ;


  }



}
