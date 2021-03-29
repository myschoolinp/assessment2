import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { DialogProductDialog } from '../../dialog/addproduct/addproduct.dialog';
import { DialogDeleteDialog } from '../../dialog/deletebox/delete.dialog';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'category', 'quality', 'price', 'image', 'Edit', 'Delete'];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;
  constructor(public dialog: MatDialog, public router: Router, public snackBar: MatSnackBar, public productService: ProductService) { }
  ngOnInit() {
    this.getProductList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  //For get all ProductLost list 
  getProductList() {
    this.dataSource = new MatTableDataSource(this.productService.allProduct);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // Add New product
  addNewProduct(state: any, data: any, i?: any) {
    const dialogRef = this.dialog.open(DialogProductDialog, {
      width: '300px',
      minWidth: '250px',
      data: { totalData: data, status: state }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && state == 'add') {
        this.productService.allProduct.unshift(result);
      } else if (result && state == 'update') {
        this.productService.allProduct[i] = result;
      }
      this.getProductList();
    });
  }

  // Delete Product
  deleteProduct(ele: any, i: number) {
    const dialogRef = this.dialog.open(DialogDeleteDialog, { width: '300px', minWidth: '250px', });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'delete') {
        this.productService.allProduct.splice(i, 1);
        this.getProductList();
      }
    });
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['login']);
  }

}
