import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventsService } from '../../services/events.service';
import { CATEGORIES } from '../../app.constants';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categories = CATEGORIES;

  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    private eventsService: EventsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  setFilter(data) { 
    this.eventsService.filterEvents(data);
    this.cancel();
  }

}
