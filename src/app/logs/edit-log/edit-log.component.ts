import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';
import  { AngularFireAction, AngularFireDatabase } from 'angularfire2/database'


@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent implements OnInit {

  constructor(private logsService: LogsService) { }
  logs$ // variable qui contient l'observable


  ngOnInit() {
    this.logs$ = this.logsService.getLogs(); // observable
  }

  showLogDetails(log){
  }

  deleteLog(log){
    console.log ('delete log', log)
    this.logsService.deleteLogById(log.key)
  }

  toggleToEditMode(log){
    this.logsService.editLog(log)

  }
}
