import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';

const routes: Routes = [
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'manage-orders', component: ManageOrdersComponent},
  {path: 'manage-products', component: ManageProductsComponent},
  {path: '', redirectTo: 'shopping-cart', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
