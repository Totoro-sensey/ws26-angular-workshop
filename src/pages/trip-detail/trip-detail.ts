import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Trip, TripService } from '../../services/trip-service';

@Component({
    selector: 'page-trip-detail',
    templateUrl: './trip-detail.html',
    styleUrl: './trip-detail.css',
    imports: [],
})
export class TripDetailPage implements OnInit {
    tripService = inject(TripService);
    trip: Trip = { id: -1, name: '', description: '', date: '' };
    tripId = -1;
    private activatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.tripId = Number(params['id'] ?? -1);
            this.trip = this.tripService.getTrip(this.tripId) ?? this.trip;
        })
    }
}
