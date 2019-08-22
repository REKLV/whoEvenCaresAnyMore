export class Validation {

  checkName (name: string):boolean
  {
    name = this.removeEmptySpace(name);

    if(typeof name != "string" || name != null || name == "" || name.length > 128 || this.checkIfContainsOnlyNum(name) == false || name.length < 3)
    {
      return false;
    }

    return true;

  }

  checkIfContainsOnlyNum(passedString: string): boolean
  {
    return passedString.match(/^[0-9]+$/) != null;
  }

  checkAddress(addressLine: string): boolean 
  {

    if(typeof addressLine != "string" || addressLine != null || addressLine == "" || addressLine.length > 128 || addressLine.length < 10 )
    {
      return false;
    }
    return true;
  }

  checkPostCode(passedPostCode: string): boolean
  {
    passedPostCode = this.removeEmptySpace(passedPostCode);
    var regexPostCode = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;

    if(typeof passedPostCode != "string" || regexPostCode.test(passedPostCode) == false)
    {
      return false;
    }
    return true;
  }

  removeEmptySpace(passedStirng: string): string
  {
    return passedStirng.replace(/\s/g, "");
  }

  checkEmail(passedEmail: string): boolean
  {

    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    passedEmail = this.removeEmptySpace(passedEmail);

    if(typeof passedEmail != "string" || passedEmail != null || this.checkIfContainsOnlyNum(passedEmail) == true ||  regexEmail.test(passedEmail) == false)
    {
      return false;
    }

    return true;
  }

  checkNan(passedNan: string): boolean
  {
    var regexNan = /^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}([A-D]|\s)$/;

    passedNan = this.removeEmptySpace(passedNan);

    if(typeof passedNan != "string" || regexNan.test(passedNan) == false)
    {
      return false;
    }

    return true;
  }

  checkBankSortCode(passedSortCode: string): boolean 
  {
    passedSortCode = this.removeEmptySpace(passedSortCode);
    if(typeof passedSortCode != "string" || passedSortCode != null || this.checkIfContainsOnlyNum(passedSortCode) == false || passedSortCode.length != 6 )
    {
      return false; 
    }

    return true;
  }
  
  checkBankAccountNum(passedAccountNum: string): boolean 
  {

    passedAccountNum = this.removeEmptySpace(passedAccountNum)
    if(typeof passedAccountNum != "number" || passedAccountNum != null || this.checkIfContainsOnlyNum(passedAccountNum) == false || passedAccountNum.length != 8)
    {
      return false
    }
    
    return true;

  }

  checkNegativeNum(passedNum: number)
  {
    if(passedNum < 0 )
    {
      return false;
    }

    return true;
  }
  
  checkSalary(passedSalary: number): boolean
  {
    
    if(typeof passedSalary != "number" || passedSalary != null || this.checkNegativeNum(passedSalary) == false)
    {
      return false; 
    }
    return true;
  }

  

}
