import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleUnitTestComponent } from './sample-unit-test/sample-unit-test.component';

const routes: Routes = [{
  path: '',
  component: 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
