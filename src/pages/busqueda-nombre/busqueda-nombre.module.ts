import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaNombrePage } from './busqueda-nombre';

@NgModule({
  declarations: [
    BusquedaNombrePage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaNombrePage),
  ],
})
export class BusquedaNombrePageModule {}
