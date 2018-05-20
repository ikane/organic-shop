import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:"shopping-cart", component: ShoppingCartComponent},
  {path: "**", component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
