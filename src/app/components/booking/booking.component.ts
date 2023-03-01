import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customerInfoEnum } from 'src/app/models/customer-info.enum';
import { CustomerService } from 'src/app/services/customer.service';
import { contactInformationValidator } from 'src/app/validators/contact-information.validator';
import { regexFormControlValidator } from 'src/app/validators/regex-form-control.validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public phoneLink: string | undefined;
  public emailLink: string | undefined;
  public instagramLink: string | undefined;
  public customerForm: FormGroup;

  constructor(private customerService: CustomerService) {
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

  ngOnInit(): void {
    this.phoneLink = 'tel:4404096403';
    this.emailLink = 'mailto:carlielaurienzo@gmail.com?subject=Appointment Request';
    this.instagramLink = 'https://www.instagram.com/laurienzohairco/'
  }

  public submit = () => {
    console.log('Customer Form: ', this.customerForm)
    this.customerService.publish()
  }

  public update = () => {
    //console.log('Customer Form: ', this.customerForm)
    for (let field in this.customerForm.value) {
      if (this.customerForm.controls[field].valid) {
        this.customerService.set((field as customerInfoEnum), this.customerForm.value[field])
      }
    }
  }
}
