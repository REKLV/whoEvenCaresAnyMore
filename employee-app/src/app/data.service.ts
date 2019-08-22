import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
    
  }

  employees = this.http.get<Employee[]>('/api/employees');

  // public addCity(newCity: City): void {
  //   this.cities = this.http.post<City[]>('/api/addcity', newCity);
  // }
}
