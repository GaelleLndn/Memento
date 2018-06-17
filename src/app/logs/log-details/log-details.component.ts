import { switchMap } from 'rxjs/operators';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute , Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { LogsService } from '../../services/logs.service';
import { Log } from '../../../log.interface'

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {

  log$
  logId

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private logsService: LogsService
  ) { }

  ngOnInit() {
    this.logId = this.route.snapshot.paramMap.get('id');
    this.log$ = this.logsService.getLog(this.logId);    

}
  goToLogListe(){
    this.router.navigate(['/liste'])
  }
}
