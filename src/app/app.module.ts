import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleUnitTestModule } from './sample-unit-test/sample-unit-test.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleUnitTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
