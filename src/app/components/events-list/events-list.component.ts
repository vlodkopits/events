import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';
import { FilterComponent } from '../../components/filter/filter.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  public events: Event[];
  public event: Event;
  public categories;

  constructor(
    private eventsService: EventsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    const isEventsStorage = this.eventsService.getEventsStorage('events');
    if (isEventsStorage) {
      this.events = isEventsStorage;
    } else {
      this.eventsService.getEvents().subscribe(events => {
        this.events = events;
        this.eventsService.setEventsStorage('events', this.events);
      });
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
      width: '350px',
      data: { categories: [] }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.categories = result;
    });
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
