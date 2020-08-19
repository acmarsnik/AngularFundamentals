import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './app.component';
import { EventsListComponent } from './events/list/events-list.component';
import { EventsThumbnailComponent } from './events/thumbnail/events-thumbnail.component';

@NgModule({
  declarations: [EventAppComponent, EventsListComponent, EventsThumbnailComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [EventAppComponent],
})
export class EventAppModule {}
