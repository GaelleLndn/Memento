import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit {

  myForm: FormGroup;
  private active: boolean = true;
  

  @Output()
  create = new EventEmitter();

  constructor( private FormBuilder: FormBuilder) { }

  ngOnInit() {
    var today = new Date;    
    this.myForm = this.FormBuilder.group({
      date: [today.toISOString()],
      log : ['', Validators.required],
      key: [''],
      category: ['Sans catégorie', Validators.required] 
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
