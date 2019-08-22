import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Employee } from '../employee';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'employee-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  @Input() employee: Employee;

  switchboard: SwitchboardService;

  constructor(switchboard: SwitchboardService) {
    this.switchboard = switchboard;
  }

  subEmployee: Subscription;

  ngOnInit(): void {
    this.subEmployee = this.switchboard.employee$.subscribe((e) => {
        this.employee = e;
    });
  }

  ngOnDestroy(): void {
    this.subEmployee.unsubscribe();
  }

}
