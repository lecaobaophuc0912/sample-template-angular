import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestFlowComponent } from './guest-flow.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GuestFlowComponent]
})
export class GuestFlowModule { }
