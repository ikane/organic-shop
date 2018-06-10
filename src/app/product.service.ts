import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs-compat/operator/map';


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

  getAll() {
    return this.db.list('/products').valueChanges();
    /*
    return this.db.list('/products').snapshotChanges()
    .pipe(
      map(changes => {
        changes.map(c => ({key: c.payload.key, ...c.payload.val()}));
      })
    );
    */

    // Use snapshotChanges().map() to store the key
    /*
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    */
  }

  getAll2() {
    return this.db.list('/products');
  }

  get(productId) {
    return this.db.object('/products/' + productId);
  }

  update(productId, product) {
    this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    this.db.object('/products/' + productId).remove();
  }
}
