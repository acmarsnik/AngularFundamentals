import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../list/event';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css'],
})
export class EventsThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  @Output() eventClick: EventEmitter<string>;

  constructor() {
    this.eventClick = new EventEmitter<string>();
  }

  ngOnInit(): void {}

  public getStartTimeClass(): object {
    const isEarlyStart = this.event && this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
