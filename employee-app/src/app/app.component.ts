import { Component } from '@angular/core';
import { City } from './city';
import { DataService } from './data.service';

@Component({
  selector: 'city-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'city-app';
}

