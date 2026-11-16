import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripForm } from '../../components/trip-form/trip-form';

@Component({
    selector: 'page-trip-form',
    templateUrl: './trip-form.html',
    styleUrl: './trip-form.css',
    imports: [TripForm],
})
export class TripFormPage implements OnInit {
    tripId = -1;

    private activatedRoute = inject(ActivatedRoute);
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.tripId = Number(params['id'] ?? -1);
        })
    }
}
