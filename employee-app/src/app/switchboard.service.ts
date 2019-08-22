import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class SwitchboardService {

  private cityWatcher = new Subject<City>();
  public city$ = this.cityWatcher.asObservable();

  constructor() { }

  public switchCity(city: City) {
    if (city) {
      this.cityWatcher.next(city);
    }
  }
}
