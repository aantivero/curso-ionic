import { Producto } from './../../shared/producto';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductoServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductoServiceProvider {

  productos: Producto[];

  constructor() {
    console.log('Hello ProductoServiceProvider Provider');
  }

  getProductos() {
    this.productos = [new Producto('nombre', 'description', 123)];
    return this.productos;
  }

}
