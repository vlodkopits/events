import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../models/event';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  event: Event;
  events: Event[];
  private eventId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( params => {
      this.eventId = params.get('id');
    })

    this.getEvent(this.eventId)
  }

  getEvent(id: string) {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
      return this.event = events.find(event => event.id === id);
    });
  }

  addToFavorite(id) {
    const event = this.events.find(event => event.id === id);
    event.is_favorite = !event.is_favorite;
    // this.eventsService.updateEventsStorage('favorites', this.events);
    this.eventsService.updateEventsStorage('events', this.events);
  }

}
