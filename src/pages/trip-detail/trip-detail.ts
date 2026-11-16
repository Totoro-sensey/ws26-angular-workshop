import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'page-trip-detail',
    templateUrl: './trip-detail.html',
    styleUrl: './trip-detail.css',
    imports: [],
})
export class TripDetailPage implements OnInit {
    tripId = -1;

    private activatedRoute = inject(ActivatedRoute);
    ngOnInit() {
        this.activatedRoute.params.subscribe((params) => {
            this.tripId = Number(params['id']);
        })
    }
}
