import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { LoginComponent } from './login/login.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'check-out', component: CheckOutComponent},
  {path: 'order-success', component: OrderSuccessComponent},
  {path: 'my/orders', component: MyOrdersComponent},
  {path: 'admin/products', component: AdminProductsComponent},
  {path: 'admin/orders', component: AdminOrdersComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
