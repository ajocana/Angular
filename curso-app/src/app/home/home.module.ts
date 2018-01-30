import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [CommonModule, ChartsModule],
  exports: [HomeComponent],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule {}
