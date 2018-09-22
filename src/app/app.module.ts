import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { EventsService } from './services/events.service';
import { HttpClientModule } from '@angular/common/http'; 

import { 
  MatIconModule,
  MatGridListModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';

import { EventsListComponent } from './components/events-list/events-list.component';
import { EventsMapComponent } from './components/events-map/events-map.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FilterComponent } from './components/filter/filter.component';
import { EventComponent } from './components/event/event.component';

const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'event/:id',      component: EventComponent },
  { path: 'map', component: EventsMapComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'filter', component: FilterComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventsListComponent,
    EventsMapComponent,
    FavoritesComponent,
    FilterComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // material
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot( appRoutes)
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
