import { ProductoServiceProvider } from './../../providers/producto-service/producto-service';
import { Producto } from './../../shared/producto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  productos: Producto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private productoServiceProvider: ProductoServiceProvider) {
      this.productos = this.productoServiceProvider.getProductos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

  itemSelected(producto: Producto) {
    
  }

}
