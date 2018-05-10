import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Custom Components
import { AppComponent } from './app.component';
import { LogsComponent } from './logs/logs.component';
import { CreateLogComponent } from './create-log/create-log.component';

//Services
import { LogsService } from './services/logs.service';

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
    LogsComponent,
    CreateLogComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
