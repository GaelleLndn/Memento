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
import { LogsComponent } from './logs/logs.component';
import { BackendLogsComponent } from './backend/backend-logs/backend-logs.component';
import { BackendHomeComponent } from './backend/backend-home/backend-home.component';

//Services
import { LogsService } from './services/logs.service';
import { CreateLogComponent } from './backend/create-log/create-log.component';
import { LogDetailsComponent } from './log-details/log-details.component';



const CONFIG: FirebaseAppConfig = {
  apiKey: "AIzaSyBQ3CkNjymk8df5zdJ0vY7_6Z8OjPM2lHg",
  authDomain: "memento-6176e.firebaseapp.com",
  databaseURL: "https://memento-6176e.firebaseio.com",
  projectId: "memento-6176e",
  storageBucket: "memento-6176e.appspot.com",
  messagingSenderId: "472280656031"
};

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', component: LogsComponent },
  { path: 'log/:id', component: LogDetailsComponent },
  { path: 'admin', component: BackendHomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    CreateLogComponent,
    LogDetailsComponent,
    BackendHomeComponent,
    BackendLogsComponent,
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
    LogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
