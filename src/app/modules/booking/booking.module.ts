import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { BackgroundModule } from '../background/background.module';
import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from 'src/app/components/booking/booking.component';
import { PhoneNumberFormatterDirective } from 'src/app/directives/phone-number-formatter.directive';

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
    MatButtonModule
  ]
})
export class BookingModule { }
