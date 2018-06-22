import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusquedaFiltrosPage } from './busqueda-filtros';

@NgModule({
  declarations: [
    BusquedaFiltrosPage,
  ],
  imports: [
    IonicPageModule.forChild(BusquedaFiltrosPage),
  ],
})
export class BusquedaFiltrosPageModule {}
