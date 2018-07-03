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
  private active: boolean = true;


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
      this.isInEditMode = true;
      this.verb = 'Modifier'
      this.formCat.get('labelCat').patchValue((data as Category).labelCat);
      this.formCat.get('key').patchValue((data as Category).key)
    })  

  }

  saveCategory(){
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
    this.active = false;
    setTimeout(() => this.active = true, 0); // détruit et recrée le formulaire juste après sa soumission pour remettre son état à 'untouched'
    this.verb ='Ajouter';
  }

  cancelEditCat(){
    this.isInEditMode = false;
    this.verb = 'Ajouter';
    this.formCat.reset();
    this.active = false;
    setTimeout(() => this.active = true, 0); // détruit et recrée le formulaire juste après sa soumission pour remettre son état à 'untouched'
  }

}
