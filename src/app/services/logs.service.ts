// le service est chargé de se connecter à la BDD et de transférer les données au component

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'


@Injectable()
export class LogsService {

  logs$ // on crée la variable logs$

  constructor(private afDb: AngularFireDatabase) {}

  getLogs(){
    //return this.logs$ = this.afDb.list('Logs').valueChanges();  le $ dit que c'est une variable qui contient un observable
    return this.logs$ = this.afDb.list('Logs')
      .snapshotChanges()
      .map(logs => logs.map(log => ({ 
        key : log.key, ...log.payload.val()
      }))); // permet de récupérer toutes les métadonnées, notamment le keys
  }

  createLog(log){
   return this.afDb.list('Logs').push(log); // 'Logs' fait référence qu nom de la BDD
  }
}
