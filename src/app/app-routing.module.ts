import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LogListComponent } from './logs/log-list/log-list.component';
import { AddLogComponent } from './logs/add-log/add-log.component';
import { EditLogComponent } from './logs/edit-log/edit-log.component';
import { LogComponent } from './logs/log/log.component';
import { CategoriesHomeComponent } from './categories/categories-home/categories-home.component';

import { PostsComponent } from './posts/posts.component'



const ROUTES: Routes = [
    { path: '', pathMatch: 'full', component: PostsComponent },
    // { path: 'log/:id', component: LogComponent },
    // { path: 'ajouter', component: AddLogComponent},
    // { path: 'editer', component: EditLogComponent },
    // { path: 'liste', component: LogListComponent },
    // { path: 'categories', component: CategoriesHomeComponent },
    { path: 'posts', component: PostsComponent }

  ];
  
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(ROUTES) ]
})

export class AppRoutingModule { }