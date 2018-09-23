import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../app.constants';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  submitted: boolean = false;
  categories = CATEGORIES;
  public event: Event = {
    "id": null,
    "title": "",
    "description": "",
    "category": "",
    "venue": "",
    "price": null,
    "poster": "",
    "start_at": "",
    "end_at": "",
    "is_favorite": false
  };

  constructor(
    private eventsService: EventsService,
  ) { }

  ngOnInit() {
  }

  add(){
    this.event.id = this.eventsService.setEventID();
    this.eventsService.addEvent(this.event);
    this.submitted = true;
  }

}
