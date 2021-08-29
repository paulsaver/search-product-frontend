import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    productName: '',
    vendorCode: '',
    amountRemain: '',
    typeRemain: '',
    photo: '',
    price: ''
  }

  constructor(private productService: ProductService,
    private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    this.productService.addProduct(this.product as unknown as Product)
    .subscribe(() => this.goBack());
  }

}
