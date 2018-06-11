import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products$;
  products: Product[];
  filteredProducts: Product[];

  constructor(private productService: ProductService) {
    // this.products$ = this.productService.getAll();

    /*
    this.productService.getAll().subscribe(p => {
      console.log(p);
    });
*/
    /*
    this.productService.getAll2().snapshotChanges()
      .subscribe(p => {
        p.map(item => {
          console.log(item.key);
          console.log(item.payload.val().title);
        });
      });
      */

      const itemsRef = this.productService.getAll2();
      this.products$ = itemsRef.snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );

      this.products$.subscribe(p => this.filteredProducts = this.products = p);

   }


  filter(query: string) {
    
    this.filteredProducts = (query) ?
          this.products.filter(p => p.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())):
          this.products
          ;
  }

}
