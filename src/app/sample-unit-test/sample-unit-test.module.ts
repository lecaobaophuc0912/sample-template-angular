import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleUnitTestComponent } from './sample-unit-test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'sample-unit-test',
    component: SampleUnitTestComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SampleUnitTestComponent]
})
export class SampleUnitTestModule { }
