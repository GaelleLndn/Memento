import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogsService } from '../../services/logs.service';

import { Category } from '../../../category.interface';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  formCat: FormGroup;
  categorie; //behaviorSubject

  @Output()
  createCat = new EventEmitter();

  @Output()
  updateCat = new EventEmitter();

  isInEditMode = false;
  verb = 'Ajouter';

  constructor( private formBuilder: FormBuilder, private logsService: LogsService) { }

  ngOnInit() {
    this.formCat = this.formBuilder.group({
      labelCat : ['', Validators.required],
      key: ['']
      })

    this.logsService.subjectCat.subscribe(data => {
      console.log('data', data);
      this.isInEditMode = true;
      this.verb = 'Modifier'
      this.formCat.get('labelCat').patchValue((data as Category).labelCat);
      this.formCat.get('key').patchValue((data as Category).key)
    })  

    this.logsService.currentCat.subscribe(categorie => this.categorie = categorie)  //behaviorSubject

  }

  saveCategory(){
    console.log('form valid', this.formCat.valid);
    if(!this.formCat.valid) {
      console.log('form is NOT valid')
      return
    }

    if(!this.isInEditMode){
      this.verb = 'Ajouter';
      this.createCat.emit(this.formCat)
    }else if(this.isInEditMode){
      this.updateCat.emit(this.formCat);
      this.isInEditMode = false
    }
    this.formCat.reset();
    this.verb ='Ajouter';
  }

  cancelEditCat(){
    this.isInEditMode = false;
    this.verb = 'Ajouter';
    this.formCat.reset()
  }

}
