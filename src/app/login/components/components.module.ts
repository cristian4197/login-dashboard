import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  LoginComponent,
  FormLoginComponent
]


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ], 
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentsModule { }
