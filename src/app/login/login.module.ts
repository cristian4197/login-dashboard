import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ComponentsModule
  ]
})
export class LoginModule { }
