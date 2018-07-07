import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Subject, Observable, BehaviorSubject } from 'rxjs'; 
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Log } from '../../log.interface';
import { Category } from '../../category.interface';


@Injectable()
export class LogsService {

  logsCollection: AngularFirestoreCollection<Log>
  logs: Observable<Log[]>

  categoriesCollection:AngularFirestoreCollection<Category>
  categories: Observable<Category[]>

  subject = new Subject();
  subjectCat = new Subject();
 
  constructor(private http: HttpClient) {} 

  getTimestamp(){return firebase.database.ServerValue.TIMESTAMP};





  
  // .:: LOGS ::.

  getLogs(){
    console.log ('getLogs')
  }

  getLastThreeLogs(){
    console.log ('getLastThreeLogs')
  }

  getLog(logId){
    console.log ('getLog By ID', logId)
  }

  createLog(log){
    console.log ('createLog', log)
  }

  deleteLogById(id: string){
    console.log ('deleteLogById', id)
  }

  editLog(log){
    this.subject.next(log);
  }

  updateLog(log){
    console.log ('updateLog', log)
  }



  // .:: CATEGORIES ::.

  getCategories(){
    console.log ('getCategories')
  }

  getCategory(catId){
    console.log ('gatCategory By ID', catId)
  }

  createCategory(category){
    console.log ('createCategory', category)
  }

  deleteCategoryById(id: string){
    console.log ('deleteCategory', id)  }

  editCategory(category){
    this.subjectCat.next(category)
  }

  updateCategory(category){
    console.log ('updateCategory', category)
 }


// L O G S   A N D   C A T E G O R I E S




}
