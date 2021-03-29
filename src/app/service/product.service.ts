import { Injectable } from '@angular/core';
import product from '../../assets/productList/product.json';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProduct: any = [];
  constructor() {
    this.allProduct = product;
  }

}
