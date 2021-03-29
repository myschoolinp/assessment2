import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { DemoMaterialModule } from '../../material-module';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    DemoMaterialModule,

  ],
  declarations: [UserComponent]
})
export class UserModule { }