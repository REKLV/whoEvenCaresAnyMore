import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {

  constructor(private http: HttpClient) { 

  }

  departments = [
    {
      department_id: 1,
      name: 'HR'
    }, 
    {
      department_id: 2,
      name: 'Finance'
    }
  ];

  // departments = this.http.get<Department[]>('/api/departments');
}
