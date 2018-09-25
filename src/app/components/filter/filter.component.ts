import { Component, OnInit, Inject, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  categories: any;
  filterCat; any;
  onAdd = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    private eventsService: EventsService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.categories = this.data;
  }

  cancel(): void {
    this.dialogRef.close();
  }

  setFilter() {
    this.categories = this.eventsService.filterEvents(this.categories);
    let filter = this.categories.filter( cat => cat.checked === true);
    this.filterCat = filter.map(cat => cat.title);
    this.onAdd.emit(this.filterCat);
    this.cancel();
  }

}
