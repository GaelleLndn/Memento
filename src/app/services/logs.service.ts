// le service est chargé de se connecter à la BDD et de transférer les données au component

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subject } from 'rxjs/subject'; // capable d'émettre des infos et capable d'en écouter . on l'utilise quand 2 composant de même niveau ont besoin de communiquer l'un aavec l'autre


@Injectable()
export class LogsService {

  subject = new Subject();

  constructor(private afdb: AngularFireDatabase) {}

  getLogs(){
    //return this.logs$ = this.afDb.list('Logs').valueChanges();  le $ dit que c'est une variable qui contient un observable
    return this.afdb.list('Logs')
      .snapshotChanges()
      .map(logs => logs.map(log => ({ 
        key : log.key, ...log.payload.val()
      }))); // permet de récupérer toutes les métadonnées, notamment le keys
  }

  createLog(log){
   return this.afdb.list('Logs').push(log); // 'Logs' fait référence au nom de la BDD
  }

  deleteLogById(id: string){
    return this.afdb.list('Logs').remove(id);
  }

  editLog(log){
    this.subject.next(log);
  }

  updateLog(log){
    return this.afdb.object(`Logs/${log.key}`).update(log); //on veut descendre le chemin vers un log particulier du noeud 'Logs' de la DB via son ID
    //ici 'log' fait référence à la version modifiée du log (qui a été émit par le composant enfant) qui a été rendue disponible en tant q 'event de l'ouput parametter grace à l'eventEmitter 'update' créré dans backend-home.component.html
  }

}
