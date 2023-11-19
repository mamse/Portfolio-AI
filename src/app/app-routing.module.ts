import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import {SalaryCalculatorComponent} from './salary-calculator/salary-calculator.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'salary-calculator', component: SalaryCalculatorComponent }
  // Other routes for your application
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Add { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
