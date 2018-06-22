import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaGeolocalizacionPage } from './busqueda-geolocalizacion';

@NgModule({
  declarations: [
    BusquedaGeolocalizacionPage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaGeolocalizacionPage),
  ],
})
export class BusquedaGeolocalizacionPageModule {}
