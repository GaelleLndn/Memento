import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit {

  myForm: FormGroup;
  @Output()
  create = new EventEmitter

  constructor( private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.FormBuilder.group({
      date: [''],
      category: ['Sans catégorie', Validators.required],
      log :['', Validators.required]
    })
  }

  createLog(){
    console.log('myForm Validation', this.myForm.valid)
    if (this.myForm.valid) {
      this.create.emit(this.myForm)
    }

  }

}
