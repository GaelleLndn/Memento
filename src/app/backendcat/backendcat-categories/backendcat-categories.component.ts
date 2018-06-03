import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-backendcat-categories',
  templateUrl: './backendcat-categories.component.html',
  styleUrls: ['./backendcat-categories.component.css']
})
export class BackendcatCategoriesComponent implements OnInit {
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
