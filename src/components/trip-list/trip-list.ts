import { Component, OnInit } from '@angular/core';

interface Trip {
    name: string;
    description: string;
    date: string;
}

@Component({
    selector: 'app-trip-list',
    templateUrl: './trip-list.html',
    styleUrl: './trip-list.css',
    imports: [],
})
export class TripList implements OnInit {
    trips: Trip[] = [
        {
            name: 'Slovenia',
            description: 'Lake Bled',
            date: '2026-10-01',
        },
        {
            name: 'Italy',
            description: 'Trip to Lignano',
            date: '2026-11-20',
        },
        {
            name: 'Germany',
            description: 'Trip to Munich',
            date: '2026-12-22',
        }
    ];

    now: string;

    constructor() {
        this.now = '2026-11-16';
        console.log('constructor', this.now);
    }

    ngOnInit() {
        this.now = (new Date()).toISOString();
        console.log('on init', this.now);
    }
}
