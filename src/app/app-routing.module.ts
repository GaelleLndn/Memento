import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LogListComponent } from './logs/log-list/log-list.component';
import { LogDetailsComponent } from './logs/log-details/log-details.component';
import { AddLogComponent } from './logs/add-log/add-log.component';
import { EditLogComponent } from './logs/edit-log/edit-log.component';
import { LogComponent } from './logs/log/log.component';



const ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: AddLogComponent },
    { path: 'log/:id', component: LogDetailsComponent },
    { path: 'ajouter', component: AddLogComponent},
    { path: 'editer', component: EditLogComponent },
    { path: 'liste', component: LogListComponent },
    { path: 'log', component: LogComponent },

  ];
  
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(ROUTES) ]
})

export class AppRoutingModule { }