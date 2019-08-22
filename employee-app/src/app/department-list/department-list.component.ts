import { Component, OnInit } from '@angular/core';
import { DepartmentDataService } from '../department-data.service';
import { Department } from '../department';
import { SwitchboardService } from '../switchboard.service';

@Component({
  selector: 'department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  data: DepartmentDataService;
  department: Department
  switchboard: SwitchboardService;

  constructor(data: DepartmentDataService, switchboard: SwitchboardService) { 
    this.data = data;
    this.switchboard = switchboard;
  }

  ngOnInit() {
  }

  onSelect (department: Department): void {
    this.department = department;
    this.switchboard.switchDepartment(this.department);
  }

}
