import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';
import { ImageSnippet } from '../image-snippet';

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
  };

  selectedImage?: ImageSnippet;

  constructor(private productService: ProductService,
    private location: Location) { }

  ngOnInit(): void {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedImage = new ImageSnippet(event.target.result, file);
    });

    reader.readAsDataURL(file);
  }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    if (this.selectedImage) {
      this.product.photo = this.selectedImage?.src;
    }
    this.productService.addProduct(this.product as unknown as Product)
    .subscribe(() => this.goBack());
  }

}
