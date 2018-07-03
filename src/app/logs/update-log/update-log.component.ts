import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { LogsService } from '../../services/logs.service';

import { Log } from '../../../log.interface' 
import { Category } from '../../../category.interface';


@Component({
  selector: 'app-update-log',
  templateUrl: './update-log.component.html',
  styleUrls: ['./update-log.component.css']
})


export class UpdateLogComponent implements OnInit {

  myForm: FormGroup;
  private active: boolean = true;
  
  cats$

  isInEditMode: Boolean = false;


  @Output()
  update = new EventEmitter();

  constructor( private FormBuilder: FormBuilder, private logsService: LogsService) { }

  ngOnInit() {      
    this.cats$ = this.logsService.getCategories()

    this.myForm = this.FormBuilder.group({
      date: ['', Validators.required],
      log : ['', Validators.required],
      key: [''],
      category: ['', Validators.required] 
    })

    this.logsService.subject.subscribe(data => {
      this.isInEditMode = true;

      let cat = (data as Log).category;
      let catarray = Object.keys(cat)
      
      this.myForm.get('date').patchValue((data as Log).date);
      this.myForm.get('category').patchValue( catarray );
      this.myForm.get('log').patchValue((data as Log).title);
      this.myForm.get('key').patchValue((data as Log).key);
    })
  }


  updateLog(){
    if (!this.myForm.valid) {
      return
    }
    this.update.emit(this.myForm);
    this.isInEditMode = false
    this.myForm.reset();
    this.active = false;
    setTimeout(() => this.active = true, 0); 
  }

  cancelEdit(){
    this.isInEditMode = false;
    this.myForm.reset();
  }

}
