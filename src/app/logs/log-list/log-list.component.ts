import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LogsService } from '../../services/logs.service';
import { Router } from '@angular/router';
import { Log } from '../../../log.interface'

@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {

  logs$: Observable<Log[]>; // le $ dit que c'est une variable qui contient un observable (un flux de données qui arrive de manière asynchrone: le tableau de résultat se met à jour au fur et à mesure des changements)
  private selectedKey;

  constructor(
    private logsService : LogsService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.logs$ = this.logsService.getLogs()
  }

  showLogDetails(log){
    this.router.navigate(['/log', log.key])
  }
}
