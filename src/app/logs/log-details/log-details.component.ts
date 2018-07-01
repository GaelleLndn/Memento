import { switchMap } from 'rxjs/operators';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute , Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { LogsService } from '../../services/logs.service';
import { Log } from '../../../log.interface';
import { Category } from '../../../category.interface';


@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {
  
  logId
  log$

  cats$: Observable<Category[]>


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

  deleteLog(log){
    console.log ('delete log', log)
    this.logsService.deleteLogById(log.key);
    this.router.navigate(['/liste'])
  }

  toggleToEditMode(log){
    console.log ('toggle to edit mode depui log-details');
    this.logsService.editLog(log)
  }

}
