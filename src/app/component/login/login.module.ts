import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { DemoMaterialModule } from '../../material-module';
@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    DemoMaterialModule,

  ],
  declarations: [LoginComponent]
})
export class loginModule { }