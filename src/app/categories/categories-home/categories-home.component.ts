import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';


@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: ['./categories-home.component.css']
})
export class CategoriesHomeComponent implements OnInit {

  constructor (private logsService: LogsService) {}

  onCategoryCreated(category){
    console.log('categorie retrieved', category)
    let addedCategory = this.logsService.createCategory({
      labelCat: category.value.labelCat,
    });
    console.log('addedCategory', addedCategory)
  }

  onCategoryUpdated(category){
    console.log ('categorie depuis la methode onCatupdtaed du parent categories-home', category)
    this.logsService.updateCategory({ 
      labelCat: category.value.labelCat, 
      key: category.value.key 
    })
  }


  ngOnInit() {
  }

}
