import { Component, signal } from '@angular/core';
import { form, FormField, required } from '@angular/forms/signals';
import { Trip } from '../../services/trip-service';

@Component({
    selector: 'app-trip-form',
    templateUrl: './trip-form.html',
    styleUrl: './trip-form.css',
    imports: [FormField],
})
export class TripForm {
    tripModel = signal<Omit<Trip, 'id'>>({
        name: '',
        description: '',
        date: '',
    });
    tripForm = form(this.tripModel, (schemaPath) => {
        required(schemaPath.name, { message: 'Required ' });
    });

    onSubmit($event: Event) {
        $event.preventDefault();
        if (this.tripForm().invalid()) {
            console.log('invalid form', this.tripForm().errors())
            return;
        }
        console.log('form is submitted', this.tripModel());
    }

    tripStart() {
        return this.tripForm.date().value();
    }
}
