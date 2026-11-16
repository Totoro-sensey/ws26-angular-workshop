import { Injectable, signal } from '@angular/core';

export interface Trip {
  id: number;
  name: string;
  description: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private trips = signal<Trip[]>([
    {
      id: 1,
      name: 'Ljubljana',
      description: 'Lake Bled',
      date: '2026-10-01',
    },
    {
      id: 2,
      name: 'Rome',
      description: 'Trip to Lignano',
      date: '2026-11-20',
    },
    {
      id: 3,
      name: 'Berlin',
      description: 'Trip to Munich',
      date: '2026-12-22',
    }
  ]);

  getTrips(): Trip[] {
    return this.trips();
  }

  getTrip(id: Trip['id']): Trip | undefined {
    return this.getTrips().find(trip => trip.id === id);
  }

  addTrip(trip: Trip) { }
  removeTrip(id: Trip['id']) { }
}
