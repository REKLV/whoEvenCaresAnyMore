import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { SwitchboardService } from '../switchboard.service';

@Component({
  selector: 'employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ngOnInit() {
  }

  thisEmployee: Employee;
  data: DataService;
  switchboard: SwitchboardService;

  constructor (dataService: DataService, switchboard: SwitchboardService) {
    this.data = dataService;
    this.switchboard = switchboard;
  }

  onSelect (newEmployee: Employee): void {
    this.thisEmployee = newEmployee;
    this.switchboard.switchEmployee(this.thisEmployee);
  }


}
