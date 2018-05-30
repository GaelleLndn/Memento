import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs$;

  constructor(private logsService : LogsService, private router: Router) {}

  ngOnInit() {
    this.logs$ = this.logsService.getLogs()
  }

  showLogDetails(log){
    this.router.navigate(['/log', log.key])

  }
}
