import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeComponent } from './add-employee.component';
import { Validations } from './validations';


export class AddEmployeeComponent {

  validName: boolean = false;
  checkName (name: string):boolean
  {
    name = this.removeEmptySpace(name);

    if(typeof name != "string" || name != null || name == "" || name.length > 128 || this.checkIfContainsOnlyNum(name) == false || name.length < 3)
    {
      return false;
    }

    this.validName = true;
    return true;

  }

  removeEmptySpace(passedStirng: string): string
  {
    return passedStirng.replace(/\s/g, "");
  }

  checkIfContainsOnlyNum(passedString: string): boolean
  {
    return passedString.match(/^[0-9]+$/) != null;
  }


  
}


describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
