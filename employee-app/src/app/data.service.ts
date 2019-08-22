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

  public addCity(newEmployee: Employee): void {
    this.http.post<Employee[]>('/api/addcity', newCity).subscribe();
  }
}
