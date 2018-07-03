import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';



@Component({
  selector: 'app-edit-log',
  templateUrl: './edit-log.component.html',
  styleUrls: ['./edit-log.component.css']
})
export class EditLogComponent implements OnInit {

  constructor(private logsService: LogsService) { }
  logs$ 
  lastThreeLogs$
  logById

  ngOnInit() {
    this.lastThreeLogs$ = this.logsService.getLastThreeLogs()
  }

  deleteLog(log){
    this.logsService.deleteLogById(log.key)
  }

  toggleToEditMode(log){
    this.logsService.editLog(log);
  }
}
