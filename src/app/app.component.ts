import { Component } from '@angular/core';
import { LogsService } from './services/logs.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
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
}
