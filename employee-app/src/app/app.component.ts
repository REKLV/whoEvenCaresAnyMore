import { Component } from '@angular/core';
import { Employee } from './employee';
import { DataService } from './data.service';

@Component({
  selector: 'employee-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'company-app';
}

