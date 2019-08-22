import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
    
  }

  cities = this.http.get<City[]>('/api/cities');

  public addCity(newCity: City): void {
    this.cities = this.http.post<City[]>('/api/addcity', newCity);
  }
}
