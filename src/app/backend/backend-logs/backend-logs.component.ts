import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';
import  { AngularFireAction, AngularFireDatabase } from 'angularfire2/database'


@Component({
  selector: 'app-backend-logs',
  templateUrl: './backend-logs.component.html',
  styleUrls: ['./backend-logs.component.css']
})
export class BackendLogsComponent implements OnInit {

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
