import { Component, OnInit, ViewChild } from '@angular/core'
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms'
import { MatSnackBar } from '@angular/material/snack-bar'
import { customerInfoEnum } from 'src/app/models/customer-info.enum'
import { CustomerService } from 'src/app/services/customer.service'
import { contactInformationValidator } from 'src/app/validators/contact-information.validator'
import { regexFormControlValidator } from 'src/app/validators/regex-form-control.validator'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  private _snackbar_duration: number = 5000

  public phoneLink: string | undefined
  public emailLink: string | undefined
  public instagramLink: string | undefined
  public customerForm: FormGroup

  @ViewChild('customerFormDirective')
  customerFormDirective!: NgForm

  constructor (private readonly customerService: CustomerService, private _snackBar: MatSnackBar) {
    this.customerForm = new FormGroup({
      firstName: new FormControl(
        customerService.get(customerInfoEnum.firstName),
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200)
        ]
      ),
      lastName: new FormControl(
        customerService.get(customerInfoEnum.lastName),
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200)
        ]
      ),
      email: new FormControl(
        customerService.get(customerInfoEnum.email),
        [
          Validators.email
        ]
      ),
      description: new FormControl(
        customerService.get(customerInfoEnum.description),
        [
          Validators.maxLength(140)
        ]
      ),
      phoneNumber: new FormControl(
        customerService.get(customerInfoEnum.phoneNumber),
        [
          Validators.maxLength(10),
          Validators.minLength(10),
          regexFormControlValidator(/^(^$|[0-9]{10})$/)
        ]
      )
    }, { validators: contactInformationValidator })
  }

  ngOnInit (): void {
    this.phoneLink = 'tel:4404096403'
    this.emailLink = 'mailto:carlielaurienzo@gmail.com?subject=Appointment Request'
    this.instagramLink = 'https://www.instagram.com/laurienzohairco/'
  }

  public submit = () => {
    if(this.customerForm.valid) {
      this.customerService.publish()
        .then(() => {
          this.customerService.reset()
          this.customerFormDirective.resetForm()
          this.customerForm.reset()

          this._snackBar.open('Successfully notified me!', undefined, { duration: this._snackbar_duration, panelClass: ['snack-bar-notification', 'snack-bar-notification--success']})
        })
        .catch(() => this._snackBar.open('Failed to notify me!', undefined, { duration: this._snackbar_duration, panelClass: ['snack-bar-notification', 'snack-bar-notification--fail']}))
    } else {
      console.log('Customer form is not valid')
    }
  }

  public update = () => {
    for (const field in this.customerForm.value) {
      if (this.customerForm.controls[field].valid) {
        this.customerService.set((field as customerInfoEnum), this.customerForm.value[field])
      }
    }
  }
}
