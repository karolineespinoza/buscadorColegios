import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioModel } from '../../models';
import { ResultPage } from '../result/result';

/**
 * Generated class for the BusquedaFiltrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda-filtros',
  templateUrl: 'busqueda-filtros.html',
})
export class BusquedaFiltrosPage {

  private listaComunas = [];
  private listaTipoColegios = [];
  private listaRegiones = [];
  private listaCiudades = [];
  private defaultValue = {
    value: 'Seleccione'
  };
  private regionS;
  private comunaS;
  private ciudadS;
  private tiposcolegio;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userModel: UsuarioModel) {

  }

  ionViewDidLoad() {

    debugger;
    if (this.listaComunas.indexOf(this.defaultValue.value) == -1) {
      this.listaComunas.push("Seleccionar");
    }

    this.userModel.listaComunas.forEach(comuna => {
      this.listaComunas.push(comuna);
    })

    if (this.listaTipoColegios.indexOf(this.defaultValue.value) == -1) {
      this.listaTipoColegios.push("Seleccionar");
    }

    this.userModel.listaTipoColegios.forEach(tipo => {
      this.listaTipoColegios.push(tipo);
    })

    if (this.listaCiudades.indexOf(this.defaultValue.value) == -1) {
      this.listaCiudades.push("Seleccionar");
    }

    this.userModel.listaCiudades.forEach(ciudad => {
      this.listaCiudades.push(ciudad);
    })

    if (this.listaRegiones.indexOf(this.defaultValue.value) == -1) {
      this.listaRegiones.push("Seleccionar");
    }

    this.userModel.listaRegiones.forEach(region => {
      this.listaRegiones.push(region);
    })
  }

  goToResult() {
    this.navCtrl.push(ResultPage);
  }

  cambiarListadoSegunRegion(opcionSeleccionada){
    let regionSeleccionada = opcionSeleccionada;
    console.log(regionSeleccionada);
  }

}
