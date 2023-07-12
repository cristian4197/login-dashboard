import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import { LoaderComponent } from './components/loader/loader.component';

const COMPONENTS =[
  HeaderDashboardComponent,
  LoaderComponent
]


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
