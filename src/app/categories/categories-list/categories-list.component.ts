import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories$;

  constructor(private logsService: LogsService, private router: Router) { }

  ngOnInit() {
    this.categories$ = this.logsService.getCategories()
  }

  showCategoryDetails(categorie){
    console.log('category', categorie)
  }

  deleteCategory(categorie){
    console.log('deletecategory', categorie)
    this.logsService.deleteCategoryById(categorie.key)
  }

  toggleToEditModeCat(categorie){
    this.logsService.editCategory(categorie)
  }
}
