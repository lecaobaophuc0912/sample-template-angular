import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    loadChildren: () =>
      import('../dashboard/home/home.module').then(
        (m) => m.HomeModule
      ),
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
