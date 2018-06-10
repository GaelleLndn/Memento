import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

// Material Design
import { MaterialModule } from './material.module';

//Custom Components
import { AppComponent } from './app.component';

import { LogComponent } from './logs/log/log.component';
import { LogListComponent } from './logs/log-list/log-list.component';
import { LogDetailsComponent } from './logs/log-details/log-details.component';
import { CreateLogComponent } from './logs/create-log/create-log.component';
import { AddLogComponent } from './logs/add-log/add-log.component';
import { EditLogComponent } from './logs/edit-log/edit-log.component';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CreateCategoryComponent } from './backendcat/create-category/create-category.component';
import { BackendcatHomeComponent } from './backendcat/backendcat-home/backendcat-home.component';
import { BackendcatCategoriesComponent } from './backendcat/backendcat-categories/backendcat-categories.component';

//Services
import { LogsService } from './services/logs.service';
import { MAT_DATE_LOCALE } from '@angular/material';



const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyBQ3CkNjymk8df5zdJ0vY7_6Z8OjPM2lHg",
  authDomain: "memento-6176e.firebaseapp.com",
  databaseURL: "https://memento-6176e.firebaseio.com",
  projectId: "memento-6176e",
  storageBucket: "memento-6176e.appspot.com",
  messagingSenderId: "472280656031"
};

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: AddLogComponent },
  { path: 'log/:id', component: LogDetailsComponent },
  { path: 'ajouter', component: AddLogComponent},
  { path: 'editer', component: EditLogComponent },
  { path: 'liste', component: LogListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categorie/:id', component: CategoryDetailsComponent },
  { path: 'admincat', component: BackendcatHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LogListComponent,
    CreateLogComponent,
    LogDetailsComponent,
    AddLogComponent,
    EditLogComponent,
    CategoriesComponent,
    CreateCategoryComponent,
    CategoryDetailsComponent,
    BackendcatHomeComponent,
    BackendcatCategoriesComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    LogsService,
    { provide: MAT_DATE_LOCALE, 
      useValue: 'fr-FR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
