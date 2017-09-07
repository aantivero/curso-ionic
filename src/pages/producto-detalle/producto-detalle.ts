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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('id'));
    this.producto = new Producto(1, 'algo', 'pp', 123);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoDetallePage');
  }

}
