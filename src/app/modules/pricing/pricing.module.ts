import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button'

import { BackgroundModule } from '../background/background.module';
import { PricingRoutingModule } from './pricing-routing.module';
import { PricingComponent } from 'src/app/components/pricing/pricing.component';


@NgModule({
  declarations: [PricingComponent],
  imports: [
    CommonModule,
    PricingRoutingModule,
    MatCardModule,
    MatButtonModule,
    BackgroundModule
  ]
})
export class PricingModule { }
