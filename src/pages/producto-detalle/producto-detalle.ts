import { ProductoServiceProvider } from './../../providers/producto-service/producto-service';
import { Producto } from './../../shared/producto';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductoDetallePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto-detalle',
  templateUrl: 'producto-detalle.html',
})
export class ProductoDetallePage {

  producto: Producto;
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private productoSP: ProductoServiceProvider) {
    console.log(this.navParams.get('id'));
    this.id = this.navParams.get('id');
    this.productoSP.getProducto(this.id);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoDetallePage');
  }

}
