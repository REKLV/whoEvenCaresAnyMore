import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'department-employees',
  templateUrl: './department-employees.component.html',
  styleUrls: ['./department-employees.component.css']
})
export class DepartmentEmployeesComponent implements OnInit {

  @Input() department: Department;
  subDepartment: Subscription;
  employees = [];

  switchboard: SwitchboardService;

  constructor(switchboard: SwitchboardService) {
    this.switchboard = switchboard;
  }

  ngOnInit() {
    this.subDepartment = this.switchboard.department$.subscribe((d) => {
        this.department = d;
        this.employees = [
          {
            "id": 4,
            "first_name": "first name",
            "last_name": "last name",
            "address_line": "address line here",
            "post_code": "postcode here",
            "email": "email here",
            "nin": "nin here",
            "bank_sort_code": "sort code here",
            "bank_account_no": "account number here",
            "salary": "salary here",
          },
          {
            "id": 5,
            "first_name": "bob name",
            "last_name": "last name",
            "address_line": "address line here",
            "post_code": "postcode here",
            "email": "email here",
            "nin": "nin here",
            "bank_sort_code": "sort code here",
            "bank_account_no": "account number here",
            "salary": "salary here",
          }
        ]
    });
  }

  ngOnDestroy(): void {
    this.subDepartment.unsubscribe();
  }

  

}
