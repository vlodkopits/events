/// <reference types="googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Event } from '../../models/event';


@Component({
  selector: 'app-events-map',
  templateUrl: './events-map.component.html',
  styleUrls: ['./events-map.component.css']
})
export class EventsMapComponent implements OnInit {

  @ViewChild('googleMap') gmapElement: any;
  google: any;
  map: google.maps.Map;
  public events: Event[];

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.events = this.eventsService.getEventsStorage('events');
    this.loadMap();
  }

  loadMap() {
    const eventsMap = document.getElementById('map-canvas');
    const mapProp = {
      center: new google.maps.LatLng(49.843713, 24.026437),
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    // this.map.panTo(mapProp.center);
    // var marker = new google.maps.Marker({ position: mapProp.center });
    // marker.setMap(this.map);

    const infowindow = new google.maps.InfoWindow({
      content: "Welcome!"
    });
    // Try HTML5 geolocation.
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     var pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };

    //     infowindow.setPosition(pos);
    //     infowindow.setContent('You are here.');
    //     infowindow.open(this.map);
    //     this.map.setCenter(pos);
    //     marker.setMap(this.map);
    //   }, function() {
    //     this.handleLocationError(true, infowindow, this.map.getCenter());
    //   });
    // } else {
    //   // Browser doesn't support Geolocation
    //   this.handleLocationError(false, infowindow, this.map.getCenter());
    // }
    // infowindow.open(this.map, marker);
    this.setMultipleMarker(this.events, this);
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(this.map);
  }

  setMultipleMarker(markers, self) {
    markers.forEach(function (marker) {
      (function (marker) {
        let mark = new google.maps.Marker({ position: new google.maps.LatLng(marker.lat, marker.lng) });
        let infowindow = new google.maps.InfoWindow({
          content: '<a href="/#/event/' + marker.id + '">' + marker.title + '</a>'
            
        });
        infowindow.open(self.map, mark);
        mark.setMap(self.map);
      })(marker)
    })
  }
}
