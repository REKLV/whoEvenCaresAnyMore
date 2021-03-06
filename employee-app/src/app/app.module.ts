import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { NameFilterPipe } from './name-filter.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from  '@ng-bootstrap/ng-bootstrap';
import { DistrictDirective } from './district.directive';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentEmployeesComponent } from './department-employees/department-employees.component';
import { DepartmentFilterPipe } from './department-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent,
    NameFilterPipe,
    DistrictDirective,
    AddEmployeeComponent,
    DepartmentListComponent,
    DepartmentEmployeesComponent,
    DepartmentFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
