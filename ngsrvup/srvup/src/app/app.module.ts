import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// third party import
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { AppRoutingModule } from './app.rauting';
import { SafePipe } from './utility/safe.pipe';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    SafePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
