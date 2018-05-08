// le service est chargé de se connecter à la BDD et de transférer les données au component

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'


@Injectable()
export class EventsService {

  events$ // on crée la variable events$

  constructor(private afDb: AngularFireDatabase) {}

  getEvent(){
    return this.events$ = this.afDb.list('events').valueChanges(); // le $ dit que c'est une variable qui contient un observable
  }
}
