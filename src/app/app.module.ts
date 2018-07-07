import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Firebase
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFirestoreModule } from 'angularfire2/firestore';

// Custom module
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';


//Custom Components
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';

import { LogComponent } from './logs/log/log.component';
import { LogListComponent } from './logs/log-list/log-list.component';
import { LogDetailsComponent } from './logs/log-details/log-details.component';
import { CreateLogComponent } from './logs/create-log/create-log.component';
import { AddLogComponent } from './logs/add-log/add-log.component';
import { EditLogComponent } from './logs/edit-log/edit-log.component';
import { UpdateLogComponent } from './logs/update-log/update-log.component';


import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { CategoriesHomeComponent } from './categories/categories-home/categories-home.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';

//Services
import { MessageService } from './services/message.service';
import { LogsService } from './services/logs.service';
import { MAT_DATE_LOCALE, MatIconRegistry } from '@angular/material';

//Custom Pipe
import { ReversePipe } from './reverse.pipe';

import { PostsComponent } from './posts/posts.component';



const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyBQ3CkNjymk8df5zdJ0vY7_6Z8OjPM2lHg",
  authDomain: "memento-6176e.firebaseapp.com",
  databaseURL: "https://memento-6176e.firebaseio.com",
  projectId: "memento-6176e",
  storageBucket: "memento-6176e.appspot.com",
  messagingSenderId: "472280656031"
};


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    
    LogComponent,
    LogListComponent,
    CreateLogComponent,
    LogDetailsComponent,
    AddLogComponent,
    EditLogComponent,
    UpdateLogComponent,

    CreateCategoryComponent,
    CategoriesHomeComponent,
    CategoriesListComponent,
    
    ReversePipe,
    
    PostsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //AngularFireModule.initializeApp(CONFIG),
    //AngularFireDatabaseModule,
    //AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule, 
    AppRoutingModule
  ],
  providers: [
    LogsService,
    MessageService,
    MatIconRegistry,
    { provide: MAT_DATE_LOCALE, 
      useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}