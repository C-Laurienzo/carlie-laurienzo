import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'

import { BookingComponent } from 'src/app/components/booking/booking.component'

const routes: Routes = [
  {
    path: '',
    component: BookingComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
