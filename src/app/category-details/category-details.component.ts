import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  categoryId;

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
