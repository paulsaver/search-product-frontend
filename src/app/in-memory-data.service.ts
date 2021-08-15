import { Product } from './product';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1,
        vendorCode: 100,
        productName: 'Banana',
        amountRemain: 15,
        typeRemain: 'kg',
        photo: 'https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        price: 119.99},
      { id: 2,
        vendorCode: 100,
        productName: 'Banana',
        amountRemain: 15,
        typeRemain: 'kg',
        photo: 'https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        price: 119.99},
        { id: 3,
          vendorCode: 100,
          productName: 'Banana',
          amountRemain: 15,
          typeRemain: 'kg',
          photo: 'https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          price: 119.99},
        { id: 4,
          vendorCode: 100,
          productName: 'Banana',
          amountRemain: 15,
          typeRemain: 'kg',
          photo: 'https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
          price: 119.99},
          { id: 5,
            vendorCode: 100,
            productName: 'Banana',
            amountRemain: 15,
            typeRemain: 'kg',
            photo: 'https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            price: 119.99},
          { id: 6,
            vendorCode: 100,
            productName: 'Banana',
            amountRemain: 15,
            typeRemain: 'kg',
            photo: 'https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmFuYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            price: 119.99}
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
}
