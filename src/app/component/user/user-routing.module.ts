import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { DemoMaterialModule } from '../../material-module';
const routes: Routes = [
  { path: '', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), DemoMaterialModule],
  exports: [RouterModule]
})
export class UserRoutingModule { }