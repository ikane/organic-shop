import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  products$: Observable<any>;

  constructor(private productService: ProductService) {
    this.products$ = this.productService.getAll();

    this.products$.subscribe(p => console.log(p));
   }

  ngOnInit() {
  }

}
