import { Component, OnInit } from '@angular/core'
import { customerInfoEnum } from 'src/app/models/customer-info.enum'
import { HairServices } from 'src/app/models/hair-services.interface'
import { CustomerService } from 'src/app/services/customer.service'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public haircuts: HairServices[] | undefined
  public colors: HairServices[] | undefined
  public styles: HairServices[] | undefined

  constructor(private readonly customerService: CustomerService) { }

  ngOnInit(): void {
    this.haircuts = [
      {
        type: 'Women\'s Haircut',
        description: '',
        price: 80
      },
      {
        type: 'Men\'s Haircut',
        description: '',
        price: 55
      },
      {
        type: 'Children\'s Haircut',
        description: '',
        price: 45
      }
    ]

    this.colors = [
      {
        type: 'All Over Color',
        description: '',
        price: 160
      },
      {
        type: 'Root Touch Up',
        description: '',
        price: 95
      },
      {
        type: 'Toner',
        description: '',
        price: 80
      },
      {
        type: 'Face Frame Balayage',
        description: '',
        price: 125
      },
      {
        type: 'Partial Balayage',
        description: '',
        price: 250
      },
      {
        type: 'Partial Highlight',
        description: '',
        price: 230
      },
      {
        type: 'Partial Babylight',
        description: '',
        price: 250
      },
      {
        type: 'Full Balayage',
        description: '',
        price: 295
      },
      {
        type: 'Full Highlight',
        description: '',
        price: 285
      },
      {
        type: 'Full Babylight',
        description: '',
        price: 295
      }
    ]

    this.styles = [
      {
        type: 'Special Occasion Down Style',
        description: 'Please Inquire for more information.',
        price: undefined
      },
      {
        type: 'Hot Tool Add On',
        description: '',
        price: 25
      },
      {
        type: 'Blowdry',
        description: '',
        price: 55
      },
      {
        type: 'Updo',
        description: '',
        price: 160
      }
    ]
  }

  inquire(hairService: HairServices): void {
    const desc = `Hello! Im interested in the following service: ${hairService.type}`
    this.customerService.set(customerInfoEnum.description, desc)
  }
}
