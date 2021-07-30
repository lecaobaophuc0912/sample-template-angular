import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestFlowComponent } from './guest-flow.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    component: GuestFlowComponent,
    loadChildren: () =>
      import('../guest-flow/login/login.module').then(
        (m) => m.LoginModule
      ),
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GuestFlowComponent]
})
export class GuestFlowModule { }
