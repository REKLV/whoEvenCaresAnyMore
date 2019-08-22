import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';
import { Validations } from './validations';

@Component({
  selector: 'employee-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  validName: boolean = false;
  validMiddleName: boolean = false;
  validSurname: boolean = false;
  validAddress: boolean = false;
  validPostCode: boolean = false;
  validEmail: boolean = false;
  validNan: boolean = false;
  validSortCode: boolean = false;
  validAccountNum: boolean = false;
  validSalary: boolean = false;
  checkIfAllValid: boolean = false;

  checkIfAllFlagsAreValid():boolean
  {
    if(!this.validName ||  !this.validSurname || !this.validAddress || !this.validPostCode || !this.validEmail  || !this.validNan 
      || !this.validSortCode || !this.validAccountNum || !this.validSalary )
    {
      this.checkIfAllValid = false;
      return false;
    }
    this.checkIfAllValid = true;
    return true;
  }

  checkName (name: string, type:string):boolean
  {
    console.log("the passed vlaues is : " + type);
    console.log("the name is being passed is : " + name);
    name = this.removeEmptySpace(name);

    if(typeof name != "string" || name == null || name == "" || name.length > 128 || this.checkIfContainsOnlyNum(name) == true || name.length < 3)
    {
      if(type == "fname")
      {
        this.validName = false;
      }
      else if(type == "mname")
      {
        this.validMiddleName = false;
      }
      else if(type == "lname")
      {
        this.validSurname = false;
      }
      this.checkIfAllFlagsAreValid();
      return false;
    }

    if(type == "fname")
    {
      this.validName = true;
    }
    else if(type == "mname")
    {
      this.validMiddleName = true;
    }
    else if (type= "lname")
    {
      this.validSurname = true;
    }

    this.checkIfAllFlagsAreValid();
    return true;
  }

  checkAddress(addressLine: string): boolean 
  {

    if(typeof addressLine != "string" || addressLine == null || addressLine == "" || addressLine.length > 128 || addressLine.length < 10 )
    {
      this.validAddress = false;
      this.checkIfAllFlagsAreValid();
      return false;
    }
    this.validAddress = true;
    this.checkIfAllFlagsAreValid();
    return true;
  }

  checkPostCode(passedPostCode: string): boolean
  {
    passedPostCode = this.removeEmptySpace(passedPostCode);
    var regexPostCode = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

    if(typeof passedPostCode != "string" || regexPostCode.test(passedPostCode) == false)
    {
      this.validPostCode = false;
      this.checkIfAllFlagsAreValid();
      return false;
    }

    this.validPostCode = true;
    this.checkIfAllFlagsAreValid();
    return true;
  }

  checkEmail(passedEmail: string): boolean
  {

    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    passedEmail = this.removeEmptySpace(passedEmail);

    if(typeof passedEmail != "string" || passedEmail == null || this.checkIfContainsOnlyNum(passedEmail) == true ||  regexEmail.test(passedEmail) == false)
    {
      this.validEmail = false;
      this.checkIfAllFlagsAreValid();
      return false;
    }
    this.validEmail = true;
    this.checkIfAllFlagsAreValid();
    return true;
  }

  checkNan(passedNan: string): boolean
  {
    var regexNan = /^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$/;

    passedNan = this.removeEmptySpace(passedNan);

    if(typeof passedNan != "string" || regexNan.test(passedNan) == false)
    {
      this.validNan = false;
      this.checkIfAllFlagsAreValid();
      return false;
    }
    this.validNan = true;
    this.checkIfAllFlagsAreValid();
    return true;
  }

  checkBankSortCode(passedSortCode: string): boolean 
  {
    passedSortCode = this.removeEmptySpace(passedSortCode);
    if(typeof passedSortCode != "string" || passedSortCode == null || this.checkIfContainsOnlyNum(passedSortCode) == false || passedSortCode.length != 6 )
    {
      this.validSortCode = false;
      this.checkIfAllFlagsAreValid();
      return false; 
    }
    this.validSortCode = true;
    this.checkIfAllFlagsAreValid();
    return true;
  }
  
  checkBankAccountNum(passedAccountNum: string): boolean 
  {

    passedAccountNum = this.removeEmptySpace(passedAccountNum)
    if(typeof passedAccountNum != "string" || passedAccountNum == null || this.checkIfContainsOnlyNum(passedAccountNum) == false || passedAccountNum.length != 8)
    {
      this.validAccountNum = false;
      this.checkIfAllFlagsAreValid();
      return false
    }
    this.validAccountNum = true;
    this.checkIfAllFlagsAreValid();
    return true;

  }

  checkNegativeNum(passedNum: number)
  {
    if(passedNum < 0 )
    {
      return false;
    }
    this.checkIfAllFlagsAreValid();
    return true;
  }
  
  checkSalary(passedSalary: string): boolean
  {
    var passedSalaryNum: number;
    passedSalaryNum = parseInt(passedSalary);

    console.log("this type of the number is : " + typeof passedSalaryNum);
    if(typeof passedSalaryNum != "number" || passedSalaryNum == null || this.checkNegativeNum(passedSalaryNum ) == false)
    {
      this.validSalary = false;
      this.checkIfAllFlagsAreValid();
      return false; 
    }
    this.validSalary = true;
    this.checkIfAllFlagsAreValid();
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


  public newEmployee: Employee;
  data: DataService;

  constructor(dataService: DataService) {
    this.data = dataService;
  }

  addEmployee(addForm): void {
    if (addForm.valid && this.checkIfAllFlagsAreValid()) {
      var employeeToAdd = this.newEmployee;
      this.newEmployee = new Employee();

      this.data.addEmployee(employeeToAdd);
    } else {
      console.error("Add employee form is in an invalid state");
    }
  }

  ngOnInit() {
    this.newEmployee = new Employee();
  }

}
