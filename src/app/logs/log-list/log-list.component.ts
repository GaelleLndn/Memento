import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogsService } from '../../services/logs.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-list',
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})


export class LogListComponent implements OnInit {

  logs$ 

  constructor(
    private logsService : LogsService, 
    private router: Router, 
  ) {}

  ngOnInit() {
    this.logs$ = this.logsService.getLogs()
  }

  showLogDetails(log){
    this.router.navigate(['/log', log.key])
  }
}
