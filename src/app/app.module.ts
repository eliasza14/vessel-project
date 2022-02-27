import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core'
import { AppRoutingModule ,routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';

import { VesselService } from './vessel.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { VesselListComponent } from './vessel-list/vessel-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // VesselListComponent
    routingComponents
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC6ULGwHNsjWCgGMYrL6IDZW5b6SIWBeDc'
    }),
    AppRoutingModule,
   
    FormsModule,
    HttpClientModule,
    // NgbModule
  ],
  providers: [VesselService],
  bootstrap: [AppComponent]
})
export class AppModule { }
