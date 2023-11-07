import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const regexFormControlValidator = (pattern: RegExp): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !pattern.test(control.value)
    return forbidden ? { patternError: { value: control.value } } : null
  }
}
