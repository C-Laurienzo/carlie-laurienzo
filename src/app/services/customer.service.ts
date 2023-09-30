import { Injectable } from '@angular/core';

import { customerInfoEnum } from "../models/customer-info.enum";
import { ICustomerInfo } from "../models/customer-info.interface";

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
    private customerInfo: ICustomerInfo;

    constructor() {
        this.customerInfo = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            description: ''
        };
    }

    public get = (field: customerInfoEnum): string => {
        return this.customerInfo[field];
    }

    public set = (field: customerInfoEnum, value: string): void => {
        this.customerInfo[field] = value
    }

    public publish = (): void => {
        console.log('PUBLISHING VALUE: ', this.customerInfo)
    } 
}