import { Component, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'add-product',
  templateUrl: 'addproduct.dialog.html',
})
export class DialogProductDialog implements AfterViewInit {
  constructor(public dialogRef: MatDialogRef<DialogProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder, private _snackBar: MatSnackBar) { }
  myForm: any;
  categoryList = ['apparel', 'shoes', 'cosmetics']
  ngOnInit(): void {
    this.reactiveForm();
    if (this.data.status == 'update') {
      let cData = this.data.totalData;
      this.myForm = this.fb.group({
        productName: [cData.productName, [Validators.required]],
        category: [cData.category, [Validators.required]],
        quality: [cData.quality, [Validators.required]],
        price: [cData.price, [Validators.required]],
        image: [cData.image, [Validators.required]],
      })

    }

  }
  ngAfterViewInit() {
  }
  reactiveForm() {
    this.myForm = this.fb.group({
      productName: ['', [Validators.required]],
      category: ['', [Validators.required]],
      quality: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
  }

  submitForm() {
    if (this.myForm.valid) {
      this.dialogRef.close(this.myForm.value);
    }
  }
  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 1000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}