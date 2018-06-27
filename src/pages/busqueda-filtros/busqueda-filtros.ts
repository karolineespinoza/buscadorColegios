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
  private defaultValue = {
    value: 'Seleccione'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private userModel: UsuarioModel) {
    this.listaComunas = this.userModel.listaComunas;
    this.listaComunas.push('Seleccione');
    this.listaTipoColegios = this.userModel.listaTipoColegios;
    this.listaTipoColegios.push('Seleccione');
  }

  ionViewDidLoad() {

    debugger;
    console.log('ionViewDidLoad BusquedaFiltrosPage');
  }

  goToResult(){
    this.navCtrl.push(ResultPage);
  }

}
