import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoMaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import {
  RoleGuardService as RoleGuard
} from '../app/component/auth/role-guard.service';
const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./component/login/login.module').then(m => m.loginModule),
  },
  {
    path: 'adminpanel', loadChildren: () => import('./component/adminpanel/adminpanel.module').then(m => m.adminPanelModule), canActivate: [RoleGuard], data: { expectedRole: 'admin' }
  },
  {
    path: 'user', loadChildren: () => import('./component/user/user.module').then(m => m.UserModule), canActivate: [RoleGuard], data: { expectedRole: 'user' }
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./component/pagenotfound/pagenotfound.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DemoMaterialModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
