import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';

@Component({
  selector: 'app-backend-home',
  templateUrl: './backend-home.component.html',
  styleUrls: ['./backend-home.component.css']
})
export class BackendHomeComponent implements OnInit {

  constructor (private logsService: LogsService) {}

  onLogCreated(log){
    console.log ('log retrieved', log)
    let addedLog = this.logsService.createLog({
      date: log.value.date,
      category: log.value.category,
      title: log.value.log
    });
    console.log ('addedLog', addedLog);
  }

  onLogUpdated(log){
    console.log ('log depuis la methode onLogUpdated du parent backend-home', log);
    this.logsService.updateLog({
      date: log.value.date,
      category: log.value.category,
      title: log.value.log,
      key: log.value.key
    })
  }

  ngOnInit() {
  }

}
