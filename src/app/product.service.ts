import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    if (product.id === '') {
      product.id = this.db.createPushId();
    }
    return this.db.list('/products').push(product);
  }

  getAll(): Observable<any> {
    return this.db.list('/products').valueChanges();
  }

  get(productId): Observable<any> {
    return this.db.object('/products/' + productId).valueChanges();
  }
}
