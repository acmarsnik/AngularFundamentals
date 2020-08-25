import { Component, OnInit } from '@angular/core';
import { IEvent } from './event';
import { eventsData } from './event-data';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {
  public events: IEvent[] = eventsData;

  constructor() {}

  ngOnInit(): void {}
}
