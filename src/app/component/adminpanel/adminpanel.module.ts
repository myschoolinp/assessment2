import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanelComponent } from './adminpanel.component';
import { AdminPanelRoutingModule } from './adminpanel-routing.module';
import { DemoMaterialModule } from '../../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogProductDialog } from '../../dialog/addproduct/addproduct.dialog';
import { DialogDeleteDialog } from '../../dialog/deletebox/delete.dialog';
import { ProductService } from '../../service/product.service';
@NgModule({
  imports: [
    CommonModule,
    AdminPanelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,

  ],
  declarations: [AdminpanelComponent, DialogProductDialog, DialogDeleteDialog],
  providers: [ProductService]
})
export class adminPanelModule { }