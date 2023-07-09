import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCategoryDefined]',
  providers: [{provide: NG_VALIDATORS, useExisting: CategoryDefinedDirective, multi: true}]
})
export class CategoryDefinedDirective implements Validator {

  public validate(control: AbstractControl): ValidationErrors | null {
    return control.value > -1 ? null : { categoryDefined: {value: control.value} }
  }

}
