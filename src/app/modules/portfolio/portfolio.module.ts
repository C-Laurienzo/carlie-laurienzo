import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from 'src/app/components/portfolio/portfolio.component';
import { BackgroundModule } from '../background/background.module';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    BackgroundModule
  ]
})
export class PortfolioModule { }
