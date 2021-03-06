import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.css'],
})
export class EventsThumbnailComponent implements OnInit {
  @Input() event;

  constructor() {}

  ngOnInit(): void {}
}
