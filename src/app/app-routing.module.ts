import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreditComponent } from './credit/credit.component';
import { ProductMapComponent } from './product-map/product-map.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent},
  { path: 'detail/:id', component: ProductComponent},
  { path: 'add', component: AddProductComponent},
  { path: 'credits', component: CreditComponent},
  { path: 'product-map', component: ProductMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
