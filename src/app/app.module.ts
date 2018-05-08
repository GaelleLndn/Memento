import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Custom Components
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

//Services
import { EventsService } from './services/events.service';

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
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
