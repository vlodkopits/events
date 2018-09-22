import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public events = [];

  constructor(
    private eventsService: EventsService
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
    this.showFavorite(this.events);
  }

  showFavorite(events) {
    return events.filter( event => event.is_favorite === true);;
  }

  addToFavorite(id) {
    const event = this.events.find(event => event.id === id);
    event.is_favorite = !event.is_favorite;
    this.eventsService.updateEventsStorage('events', this.events);
  }

}
