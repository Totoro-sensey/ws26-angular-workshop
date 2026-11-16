import { Component, signal } from '@angular/core';
import { TripList } from '../components/trip-list/trip-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [TripList],
})
export class App {
  protected readonly title = 'Angular Workshop';
  protected readonly signalTitle = signal('Welcome');
}
