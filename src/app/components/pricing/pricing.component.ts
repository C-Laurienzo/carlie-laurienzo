import { Component, type OnInit } from '@angular/core'
import { type HairServices } from 'src/app/models/hair-services.interface'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  public haircuts: HairServices[] | undefined
  public colors: HairServices[] | undefined
  public styles: HairServices[] | undefined

  constructor () { }

  ngOnInit (): void {
    this.haircuts = [
      {
        type: 'Women\'s Haircut',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
        price: 80
      },
      {
        type: 'Men\'s Haircut',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
        price: 55
      },
      {
        type: 'Children\'s Haircut',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.',
        price: 45
      }
    ]

    this.colors = [
      {
        type: 'All Over Color',
        description: '',
        price: 150
      },
      {
        type: 'Root Touch Up',
        description: '',
        price: 95
      },
      {
        type: 'Toner',
        description: '',
        price: undefined
      },
      {
        type: 'Face Frame Balayage',
        description: '',
        price: 80
      },
      {
        type: 'Partial Balayage',
        description: '',
        price: 235
      },
      {
        type: 'Partial Highlight',
        description: '',
        price: 180
      },
      {
        type: 'Partial Babylight',
        description: '',
        price: 235
      },
      {
        type: 'Full Balayage',
        description: '',
        price: 275
      },
      {
        type: 'Full Highlight',
        description: '',
        price: 225
      },
      {
        type: 'Full Babylight',
        description: '',
        price: 275
      }
    ]

    this.styles = [
      {
        type: 'Special Occasion Down Style',
        description: '',
        price: 160
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
}
