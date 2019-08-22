import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class SwitchboardService {

  private employeeWatcher = new Subject<Employee>();
  public city$ = this.employeeWatcher.asObservable();

  constructor() { }

  public switchCity(employee: Employee) {
    if (employee) {
      this.employeeWatcher.next(employee);
    }
  }
}
