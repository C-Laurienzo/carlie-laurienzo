import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field'
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips'
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input'
import { MatIconModule } from '@angular/material/icon'
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list'
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button' 
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { BackgroundModule } from '../background/background.module'
import { BookingRoutingModule } from './booking-routing.module'
import { BookingComponent } from 'src/app/components/booking/booking.component'
import { PhoneNumberFormatterDirective } from 'src/app/directives/phone-number-formatter.directive'

@NgModule({
  declarations: [BookingComponent, PhoneNumberFormatterDirective],
  imports: [
    CommonModule,
    BookingRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    BackgroundModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class BookingModule { }
