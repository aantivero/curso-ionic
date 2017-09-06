import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductoDetallePage } from './producto-detalle';

@NgModule({
  declarations: [
    ProductoDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(ProductoDetallePage),
  ],
})
export class ProductoDetallePageModule {}
