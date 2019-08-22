import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { City } from '../city';
import { SwitchboardService } from '../switchboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'city-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {

  @Input() city: City;

  switchboard: SwitchboardService;

  constructor(switchboard: SwitchboardService) { 
    this.switchboard = switchboard;  
  }

  subCity: Subscription;

  ngOnInit(): void {
    this.subCity = this.switchboard.city$.subscribe((c) => {
        this.city = c;
    });
  }

  ngOnDestroy(): void {
    this.subCity.unsubscribe();
  }

}
