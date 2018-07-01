import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LogListComponent } from './logs/log-list/log-list.component';
import { AddLogComponent } from './logs/add-log/add-log.component';
import { EditLogComponent } from './logs/edit-log/edit-log.component';
import { LogComponent } from './logs/log/log.component';
import { CategoriesHomeComponent } from './categories/categories-home/categories-home.component'



const ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: AddLogComponent },
    { path: 'log/:id', component: LogComponent },
    { path: 'ajouter', component: AddLogComponent},
    { path: 'editer', component: EditLogComponent },
    { path: 'liste', component: LogListComponent },
    { path: 'categories', component: CategoriesHomeComponent },

  ];
  
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(ROUTES) ]
})

export class AppRoutingModule { }