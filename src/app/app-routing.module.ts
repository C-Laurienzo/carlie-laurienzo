import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'

const routes: Routes = [
  { path: 'home', loadChildren: async () => await import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'services', loadChildren: async () => await import('./modules/pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'booking', loadChildren: async () => await import('./modules/booking/booking.module').then(m => m.BookingModule) },
  { path: 'portfolio', loadChildren: async () => await import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
  { path: '**', loadChildren: async () => await import('./modules/home/home.module').then(m => m.HomeModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
