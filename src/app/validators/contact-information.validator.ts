import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const contactInformationValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const phoneNumber = control.get('phoneNumber')

  return phoneNumber?.value === '' ? { missingContactInfo: true } : null
}
