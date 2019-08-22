import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[cityDistrict]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: DistrictDirective, multi: true
    }
  ]
})
export class DistrictDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {
    var validDistricts = [
      'Leinster',
      'Wales',
      'Scotland'
    ];

    return validDistricts.includes(control.value) ? null : {nosuchdistrict: true}
  }

  constructor() { }

  

}
