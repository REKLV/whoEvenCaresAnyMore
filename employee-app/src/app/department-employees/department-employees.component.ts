import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employee';

@Component({
  selector: 'department-employees',
  templateUrl: './department-employees.component.html',
  styleUrls: ['./department-employees.component.css']
})
export class DepartmentEmployeesComponent implements OnInit {

  @Input() department: Department;
  subDepartment: Subscription;
  employees;

  switchboard: SwitchboardService;
  private http: HttpClient;

  constructor(switchboard: SwitchboardService, private httpClient: HttpClient) {
    this.switchboard = switchboard;
    this.http = httpClient;
  }

  ngOnInit() {
    this.subDepartment = this.switchboard.department$.subscribe((d) => {
        this.department = d;
        this.httpClient.get<Employee>('/api/getemployeesbydepartment?id=' + this.department.department_id).subscribe(data => {
          this.employees = data;
        });
    });
  }

  ngOnDestroy(): void {
    this.subDepartment.unsubscribe();
  }

  

}
