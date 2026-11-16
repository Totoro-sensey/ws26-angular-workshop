import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Trip } from '../trip-list/trip-list';

@Component({
    selector: 'app-trip-list-item',
    templateUrl: './trip-list-item.html',
    styleUrl: './trip-list-item.css',
    imports: [RouterLink],
})
export class TripListItem {
    trip = input.required<Trip>();
    index = input.required<number>();
    onShowDate = output();

    getTripLink(index: number): string {
        return `/trip-detail/${index}`;
    }

    showDate(trip: Trip): void {
        alert(trip.date);
        this.onShowDate.emit();
    }
}
