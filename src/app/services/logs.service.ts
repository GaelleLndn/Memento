// le service est chargé de se connecter à la BDD et de transférer les données au component

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Subject, BehaviorSubject } from 'rxjs'; // capable d'émettre des infos et capable d'en écouter . on l'utilise quand 2 composant de même niveau ont besoin de communiquer l'un aavec l'autre
import { of } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Log } from '../../log.interface';
import { Category } from '../../category.interface';


@Injectable()
export class LogsService {

  subject = new Subject();
  subjectCat = new Subject();

 
  constructor(private afdb: AngularFireDatabase) {} // injection de dépendance ( initialiser un objet à partir d'une classe = instancier) afdb est l'instance (ou classe/objet) d'angularfireDatabase . Il possède des méthode, comme la méthode ".list"

  getTimestamp(){return firebase.database.ServerValue.TIMESTAMP};

  logsRef = this.afdb.list('Logs')
  catsRef = this.afdb.list('Categories')
  
  // .:: LOGS ::.
  getLogs(){
    return this.logsRef.snapshotChanges()
      .map(logs => 
        logs.map(log => ({ 
          key : log.key, ...log.payload.val()
        }))
      ); // permet de récupérer toutes les métadonnées, notamment le keys
  }

  getLastThreeLogs(){
    return  this.afdb.list('Logs', lastThreeLogs => lastThreeLogs.orderByChild('/createdOn').limitToLast(3))
      .snapshotChanges()
      .map(logs => 
        logs.map(threelogs => ({ 
          key : threelogs.key, ...threelogs.payload.val()
        }))
      );
  }

  getLog(logId){
    return this.afdb.object<Log>(`Logs/${logId}`)
    .snapshotChanges()
      .map(log => ({ 
        key : log.key, ...log.payload.val()
      }))
  }
  

  createLog(log){
   let itemKey = this.logsRef.push(log).key;
   this.afdb.object(`Logs/${itemKey}`).update({ key: itemKey })
   
   // 'Logs' fait référence au noeud "Logs" de la BDD
  }

  deleteLogById(id: string){
    return this.logsRef.remove(id);
  }

  editLog(log){
    this.subject.next(log);
  }

  updateLog(log){
    return this.afdb.object(`Logs/${log.key}`).update(log); //on veut descendre le chemin vers un log particulier du noeud 'Logs' de la DB via son ID
    //ici 'log' fait référence à la version modifiée du log (qui a été émit par le composant enfant) qui a été rendue disponible en tant q 'event de l'ouput parametter grace à l'eventEmitter 'update' créré dans add-log.component.html
  }



  // .:: CATEGORIES ::.
  getCategories(){
    return this.catsRef.snapshotChanges()
      .map(categories => categories.map(category => ({ 
        key : category.key, ...category.payload.val()
      }))); 
  }


  

  getCategory(catId){
    return this.afdb.object<Category>(`Categories/${catId}`)
    .snapshotChanges()
      .map(categories => ({ 
        key : categories.key, 
        ...categories.payload.val()
      }))
  }



  createCategory(category){
    let catKey = this.catsRef.push(category).key;
    this.afdb.object(`Categories/${catKey}`).update({ key: catKey })
  }

  deleteCategoryById(id: string){
    return this.catsRef.remove(id);
  }

  editCategory(categorie){
    this.subjectCat.next(categorie)
  }


  updateCategory(categorie){
   // "object" indique qu'on veut atteindre un élément précis de la "list"
   // "update" est une méthode de l'objet, propre à angularfire
    return this.afdb.object(`Categories/${categorie.key}`).update(categorie);
 }


// L O G S   A N D   C A T E G O R I E S

  xxgetLogCats(logId) {
    firebase.database().ref(`Logs/${logId}/category`).on('child_added', catId => {
      this.afdb.object<Category>(`Categories/${catId.key}`).snapshotChanges()
        .map(categories => ({ 
          key : categories.key, 
          ...categories.payload.val()
        })) //Will print Category 1 and Category 2
      });
  }
  xxxgetLogCats(logId) {
    return this.afdb.object<Log>(`Logs/${logId}/category`).snapshotChanges().pipe(
        map(catId => this.afdb.object<Category>(`Categories/${catId.key}`).snapshotChanges()
            .map(categories => ({ 
                key : categories.key, 
                ...categories.payload.val()
        })))) //Will print Category 1 and Category 2
  };


  getLogCats(logId){
   return firebase.database().ref(`Logs/${logId}/category`).on('child_added', snapshot => {
      firebase.database().ref('Categories/'+ snapshot.key).on('value', snap => {
          console.log(snap.val().labelCat + ' belongs to product2'); //Will print Category 1 and Category 2
        });
      })
  }
      // this.afdb.object<Category>(`Categories/${catId.key}`).snapshotChanges()
      //   .map(logCats => ({ 
      //     key : logCats.key, 
      //     ...logCats.payload.val()
      //   })) 
      // });

  


// var fb = new Firebase("https://examples-sql-queries.firebaseio.com/");
// fb.child('user/123').once('value', function(userSnap) {
//    fb.child('media/123').once('value', function(mediaSnap) {
//        // extend function: https://gist.github.com/katowulf/6598238
//        console.log( extend({}, userSnap.val(), mediaSnap.val()) );
//    });
// });
}  