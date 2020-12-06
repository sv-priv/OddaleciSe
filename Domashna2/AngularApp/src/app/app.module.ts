import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavComponent} from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LakesComponent } from './lakes/lakes.component';
import { MountainsComponent } from './mountains/mountains.component';
import { SidebarMountainsComponent } from './mountains/sidebar-mountains/sidebar-mountains.component';
import { MainMountainsComponent } from './mountains/main-mountains/main-mountains.component';
import { SidebarLakesComponent } from './lakes/sidebar-lakes/sidebar-lakes.component';
import { MainLakesComponent } from './lakes/main-lakes/main-lakes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    LakesComponent,
    MountainsComponent,
    SidebarMountainsComponent,
    MainMountainsComponent,
    SidebarLakesComponent,
    MainLakesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
