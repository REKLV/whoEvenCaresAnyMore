import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
    
  }

  employees = this.http.get<Employee[]>('/api/employees');
  departments = this.http.get<Department[]>('/api/getalldepartments');

  public addEmployee(newEmployee: Employee): void {
    this.http.post<Employee[]>('/api/addemployee', newEmployee).subscribe();
  }
}
