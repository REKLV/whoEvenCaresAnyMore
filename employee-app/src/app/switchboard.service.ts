import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Employee} from "./employee";
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class SwitchboardService {

  private employeeWatcher = new Subject<Employee>();
  public employee$ = this.employeeWatcher.asObservable();

  private departmentWatcher = new Subject<Department>();
  public department$ = this.departmentWatcher.asObservable();

  constructor() { }

  public switchEmployee(employee: Employee) {
    if (employee) {
      this.employeeWatcher.next(employee);
    }
  }

  public switchDepartment(department: Department) {
    if (department) {
      this.departmentWatcher.next(department);
    }
  }
}
