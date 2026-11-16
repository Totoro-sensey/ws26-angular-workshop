import { Routes } from '@angular/router';
import { TripOverviewPage } from '../pages/trip-overview/trip-overview';
import { TripDetailPage } from '../pages/trip-detail/trip-detail';

export const routes: Routes = [
    {
        path: '',
        component: TripOverviewPage
    },
    {
        path: 'trip-detail/:id',
        component: TripDetailPage
    }
];
