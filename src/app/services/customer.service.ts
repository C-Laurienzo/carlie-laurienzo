import { Injectable } from '@angular/core'

import { customerInfoEnum } from '../models/customer-info.enum'
import { ICustomerInfo } from '../models/customer-info.interface'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customerInfo: ICustomerInfo

  constructor() {
    this.customerInfo = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      description: ''
    }
  }

  public get = (field: customerInfoEnum): string => {
    return this.customerInfo[field]
  }

  public set = (field: customerInfoEnum, value: string): void => {
    this.customerInfo[field] = value
  }

  public reset = (): void => {
    this.customerInfo = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      description: ''
    }
  }

  public publish = (): Promise<void> => {
    return fetch('https://api.laurienzohairco.com/contact-me', {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.customerInfo)
    })
    .then(() => this.reset())
    .catch(() => console.log('Failed'))
  }
}
