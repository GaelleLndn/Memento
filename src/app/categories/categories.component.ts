import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories$ // la variable categories$ nous permet de récupérer les valeurs pour pouvoir les afficher dans le front

  constructor( private logsService: LogsService, private router: Router) { }

  ngOnInit() {
    this.categories$ = this.logsService.getCategories(); 
  }

  showCategoryDetails(categorie){
    console.log('category', categorie)
    this.router.navigate(['/categorie', categorie.key])
  }

}
