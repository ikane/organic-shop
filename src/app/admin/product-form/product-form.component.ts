import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../category.service';
import { ProductService } from '../../product.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, Route } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$: Observable<any>;
  product = {};
  productId;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.categories$ = categoryService.getCategories();

    this.productId = route.snapshot.paramMap.get('id');
    if (this.productId) {
      const itemRef = this.productService.get(this.productId);
      itemRef.snapshotChanges()
        .take(1).subscribe(p => {
          this.product = p.payload.val();
        });
    }
  }

  ngOnInit() {
  }

  save(product) {
    if (this.productId) {
      this.productService.update(this.productId, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if(!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.productId);
    this.router.navigate(['/admin/products']);
  }
}
