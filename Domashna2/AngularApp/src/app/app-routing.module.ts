import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {LakesComponent} from './lakes/lakes.component';
import {MountainsComponent} from './mountains/mountains.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'lakes', component: LakesComponent },
  { path: 'mountains', component: MountainsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
