import { Component } from '@angular/core';
import { TripList } from '../../components/trip-list/trip-list';

@Component({
    selector: 'page-trip-overview',
    templateUrl: './trip-overview.html',
    styleUrl: './trip-overview.css',
    imports: [TripList],
})
export class TripOverviewPage { }
