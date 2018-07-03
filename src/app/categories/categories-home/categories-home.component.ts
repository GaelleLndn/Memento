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
    this.logsService.createCategory ({
      labelCat: category.value.labelCat,
      key: ''
    });
  }

  onCategoryUpdated(category){
    this.logsService.updateCategory({ 
      labelCat: category.value.labelCat, 
      key: category.value.key 
    })
  }


  ngOnInit() {
  }

}
