import { Component, OnInit } from '@angular/core';
import { LogsService } from '../../services/logs.service';

@Component({
  selector: 'app-add-log',
  templateUrl: './add-log.component.html',
  styleUrls: ['./add-log.component.css']
})
export class AddLogComponent implements OnInit {

  constructor (private logsService: LogsService) {}

  onLogCreated(log){
    console.log ('date from onlogcreated()', log.value.date)

    let createdDate = log.value.date;
    let savedDate = createdDate.toISOString();

    let catval = log.value.category;
    const selectedCat={};
    for (const c of catval) {
      selectedCat[c] = true;
    }
    this.logsService.createLog({
      date: savedDate,
      category: selectedCat,
      title: log.value.log, 
    });
  }

  onLogUpdated(log){
    console.log ('log depuis la methode onLogUpdated du parent add-log', log);
    let catval = log.value.category;
    const selectedCat={};
    for (const c of catval) {
      selectedCat[c] = true;
    }
    this.logsService.updateLog({
      date: log.value.date,
      category: selectedCat,
      title: log.value.log,
      key: log.value.key
    })
  }

  ngOnInit() {
  }

}
