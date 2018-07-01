import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogsService } from '../../services/logs.service';
import { Category } from '../../../category.interface';
import { Observable } from 'rxjs';

import { Log } from '../../../log.interface' //Créer une interface permet de typer Log


@Component({
  selector: 'app-update-log',
  templateUrl: './update-log.component.html',
  styleUrls: ['./update-log.component.css']
})
export class UpdateLogComponent implements OnInit {

  myForm: FormGroup;
  private active: boolean = true;
  
  cats$: Observable<Category[]>

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


    // la methode subscribe peut prendre jusqu'à 3 eventHandler
    // patchValue permet de pré-remplir le formulaire avec le données du log que l'on veut editer (plutôt que d'avoir à tout retaper) 
    // avec les datas récupérée par le subject.subscribe
    // 'data as Log' permet de dire que les data sont de TYPE Log, tel qu'il a été défini par log.interface.ts
    this.logsService.subject.subscribe(data => {
      console.log('data de update-log', data)
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
    console.log('myForm Validation', this.myForm.valid)
    if (!this.myForm.valid) {
      console.log ('Formulaire invalide')
      return
    }
    console.log ('Formulaire valide')
    this.update.emit(this.myForm);
    this.isInEditMode = false
    this.myForm.reset();
    this.active = false;
    setTimeout(() => this.active = true, 0); // détruit et recrée le formulaire juste après sa soumission pour remettre son état à 'untouched'
  }

  cancelEdit(){
    this.isInEditMode = false;
    this.myForm.reset();
  }

}
