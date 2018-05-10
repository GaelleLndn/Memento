import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {

  logId;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.logId = this.activatedRoute.snapshot.paramMap.get('id'); // récupérer les id adns l'url
  }

}
