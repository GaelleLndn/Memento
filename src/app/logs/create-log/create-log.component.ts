import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogsService } from '../../services/logs.service';
import { Category } from '../../../category.interface';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit {

  myForm: FormGroup;
  today = new Date;
  private active: boolean = true;

  cats$: Observable<Category[]>

  @Output()
  create = new EventEmitter();

  constructor( private FormBuilder: FormBuilder, private logsService: LogsService) { }


  ngOnInit() {
    this.cats$ = this.logsService.getCategories()

    this.myForm = this.FormBuilder.group({
      date: [ this.today , Validators.required],
      log : ['', Validators.required],
      key: [''],
      category: ['' , Validators.required],
    })
  }


  createLog(){
    console.log('myForm Validation', this.myForm.valid)
    if (!this.myForm.valid) {
      console.log ('Formulaire invalide')
      return
    }
    console.log ('Formulaire valide')
    this.create.emit(this.myForm);
    this.myForm.reset();
    this.active = false;
    setTimeout(() => this.active = true, 0); // détruit et recrée le formulaire juste après sa soumission pour remettre son état à 'untouched'
  }
}
