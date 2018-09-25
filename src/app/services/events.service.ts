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

  addEventStorage(key, value) {
    let old = this.getEventsStorage(key);
    if (old === null) old = "";
    old.push(value);
    localStorage.setItem(key, JSON.stringify(old));
  }

  updateEventsStorage(key, value){
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(value));
  }

  filterEvents(data){
    return data;
  }

  addEvent(data) {
    this.addEventStorage('events', data);
  }

  setEventID() {
    return Math.random().toString(36).substr(2, 16);
  }
}
