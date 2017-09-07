import { Producto } from './../../shared/producto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ProductoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductoServiceProvider {

  productoApiUrl: 'http://localhost:3000';

  constructor(private http: Http) {
  }

  getProductos(): Observable<Producto[]> {
    return this.http.get('http://localhost:3000/productos')
    .map(res => <Producto[]>res.json());
  }

  getProducto(id: number): Observable<Producto> {
    console.log(id);
    return this.http.get('http://localhost:3000/productos?id='+id).map(
      res => <Producto>res.json());
  }

}
