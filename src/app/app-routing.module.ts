import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {NewsComponent} from './news/news.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent }
  // Other routes for your application
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Add { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }
