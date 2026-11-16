import { Routes } from '@angular/router';
import { TripOverviewPage } from '../pages/trip-overview/trip-overview';
import { TripDetailPage } from '../pages/trip-detail/trip-detail';
import { TripFormPage } from '../pages/trip-form/trip-form';

export const routes: Routes = [
    {
        path: '',
        component: TripOverviewPage
    },
    {
        path: 'trip-detail/:id',
        component: TripDetailPage
    },
    {
        path: 'trip-form',
        component: TripFormPage,
    },
    {
        path: 'trip-form/:id',
        component: TripFormPage,
    }
];
