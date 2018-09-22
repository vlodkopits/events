import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event';
import { CATEGORIES } from '../app.constants';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  categories = CATEGORIES;

  constructor(private http: HttpClient) { }
  
  getEvents() {
    return this.http.get<Event[]>('assets/events/events_list.json');
  }

  setEventsStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getEventsStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  updateEventsStorage(key, value){
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }

  filterEvents(data){
    this.categories.map( cat => {
      cat.checked = data[cat.title].value
    });
    this.getEventsStorage('events').map(event => {
      this.categories.filter(cat => cat.checked === true);
      event.category = this.categories[0];
      console.log(this.categories.filter(cat => cat.checked === true));
    });
  }
}
