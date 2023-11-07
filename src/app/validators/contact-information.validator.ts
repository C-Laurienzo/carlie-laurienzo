import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'

export const contactInformationValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const phoneNumber = control.get('phoneNumber')
  const email = control.get('email')

  return phoneNumber?.value === '' && email?.value === '' ? { missingContactInfo: true } : null
}
