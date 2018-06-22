import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BusquedaNombrePage } from '../busqueda-nombre/busqueda-nombre';
import { BusquedaFiltrosPage } from '../busqueda-filtros/busqueda-filtros';
import { BusquedaGeolocalizacionPage } from '../busqueda-geolocalizacion/busqueda-geolocalizacion';
/**
 * Generated class for the BusquedaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaPage');
  }

  buscarPorNombre(){
    this.navCtrl.push(BusquedaNombrePage);
  }

  buscarPorFiltros(){
    this.navCtrl.push(BusquedaFiltrosPage);
  }

  buscarPorGeolocalizacion(){
    this.navCtrl.push(BusquedaGeolocalizacionPage);
  }
}
