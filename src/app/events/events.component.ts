import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events$; // on crée la variable events$

  constructor(private afDb: AngularFireDatabase) { }

  ngOnInit() {
    this.events$ = this.afDb.list('events').valueChanges(); // le $ dit que c'est une variable qui contient un observable
  }

}
