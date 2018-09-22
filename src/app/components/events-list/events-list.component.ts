import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  public events: Event[];
  public event: Event;

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
    const isEventsStorage = this.eventsService.getEventsStorage('events');
    if (isEventsStorage) {
      this.events = isEventsStorage;
    } else {
      this.eventsService.getEvents().subscribe(events => {
        this.events = events;
      });
    }
  }

  getEvent(id: string) {
    this.eventsService.getEvents().subscribe(events => {
      return this.event = events.find(event => event.id === id);
    });
  }

  addToFavorite(id) {
    const event = this.events.find(event => event.id === id);
    event.is_favorite = !event.is_favorite;
    this.eventsService.updateEventsStorage('events', this.events);
  }

}
