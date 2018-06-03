import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogsService } from '../../services/logs.service';

import { Log } from '../../../log.interface' //Créer une interface permet de typer Log


@Component({
  selector: 'app-create-log',
  templateUrl: './create-log.component.html',
  styleUrls: ['./create-log.component.css']
})
export class CreateLogComponent implements OnInit {

  myForm: FormGroup;
  private active: boolean = true;
  
  categorie; //behaviorSubject

  @Output()
  create = new EventEmitter();

  @Output()
  update = new EventEmitter();

  isInEditMode = false;
  verb = "Ajouter";

  constructor( private FormBuilder: FormBuilder, private LogsService: LogsService) { }

  ngOnInit() {
    var today = new Date;
    this.LogsService.currentCat.subscribe(categorie => this.categorie = categorie)
    
    this.myForm = this.FormBuilder.group({
      date: [today.toISOString()],
      log : ['', Validators.required],
      key: [''],
      category: [this.categorie, Validators.required] // behaviorSubject
    })


    // la methode subscribe peut prendre jusqu'à 3 eventHandler
    // patchValue permet de pré-remplir le formulaire avec le données du log que l'on veut editer (plutôt que d'avoir à tout retaper) 
    // avec les datas récupérée par le subject.subscribe
    // 'data as Log' permet de dire que les data sont de TYPE Log, tel qu'il a été défini par log.interface.ts
    this.LogsService.subject.subscribe(data => {
      console.log('data', data)
      this.isInEditMode = true;
      this.verb = 'Modifier'
      this.myForm.get('date').patchValue((data as Log).date);
      this.myForm.get('category').patchValue((data as Log).category);
      this.myForm.get('log').patchValue((data as Log).title);
      this.myForm.get('key').patchValue((data as Log).key);
    })

    


  }


  saveLog(){
    console.log('myForm Validation', this.myForm.valid)
    if (!this.myForm.valid) {
      console.log ('Formulaire invalide')
      return
    }
    console.log ('Formulaire valide')
    if (!this.isInEditMode){
      this.verb = "Ajouter";
      this.create.emit(this.myForm);
    }else if(this.isInEditMode){
      this.update.emit(this.myForm);
      this.isInEditMode = !this.isInEditMode;
    }
    this.myForm.reset();
    this.active = false;
    setTimeout(() => this.active = true, 0); // détruit et recrée le formulaire juste après sa soumission pour remettre son état à 'untouched'
    this.verb = 'Ajouter';
  }

  cancelEdit(){
    this.isInEditMode = false;
    this.verb = "Ajouter";
    this.myForm.reset();
  }

}
