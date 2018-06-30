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
  lastThreeLogs$
  logById

  ngOnInit() {
    this.logs$ = this.logsService.getLogs();
    this.lastThreeLogs$ = this.logsService.getLastThreeLogs()
    console.log ('three logs', this.lastThreeLogs$)
  }

  // showLogDetails(log){
  //   console.log ('show details', log);
  //   this.logById = this.logsService.getLog(log)
  // }
  

  deleteLog(log){
    console.log ('delete log', log)
    this.logsService.deleteLogById(log.key)
  }

  toggleToEditMode(log){
    this.logsService.editLog(log)

  }
}
