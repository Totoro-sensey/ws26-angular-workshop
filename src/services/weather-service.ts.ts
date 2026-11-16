import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GpsLocation {
  latitude: number;
  longitude: number;
  name: string;
}

interface GeolocationResponse {
  generationtime_ms: number, results: GpsLocation[];
}

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceTs {
  httpClient = inject(HttpClient);

  getGpsCoordinates(destinationName: string): Observable<GeolocationResponse> {
    const params = new HttpParams({ fromString: `name=${destinationName}` });

    return this.httpClient.get<GeolocationResponse>(
      'https://geocoding-api.open-meteo.com/v1/search',
      { params }
    )
  }
}
