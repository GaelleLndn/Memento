import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogsService } from '../../services/logs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  logs$; // le $ dit que c'est une variable qui contient un observable (un flux de données qui arrive de manière asynchrone: le tableau de résultat se met à jour au fur et à mesure des changements)
  logById;


  constructor(private logsService : LogsService) {}

  ngOnInit() {
  }

 
  onLogUpdated(log){
    console.log ('log depuis la methode onLogUpdated du parent add-log', log);
    this.logsService.updateLog({
      date: log.value.date,
      category: log.value.category,
      title: log.value.log,
      key: log.value.key
    })
  }

  
}