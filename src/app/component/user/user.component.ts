import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { ProductService } from '../../service/product.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'category', 'quality', 'price', 'image'];
  dataSource: any = [];
  cutomerData: any;
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
}
