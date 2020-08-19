import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './app.component';
import { EventsListComponent } from './events/list/events-list.component';

@NgModule({
  declarations: [EventAppComponent, EventsListComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [EventAppComponent],
})
export class EventAppModule {}
