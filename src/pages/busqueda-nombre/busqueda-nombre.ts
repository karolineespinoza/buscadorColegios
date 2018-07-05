import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';
import { UsuarioModel } from '../../models';

/**
 * Generated class for the BusquedaNombrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda-nombre',
  templateUrl: 'busqueda-nombre.html',
})
export class BusquedaNombrePage {
  private listaColegios = [];
  private defaultValue = {
    value: 'Seleccione'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private userModel: UsuarioModel) {
    
   /*  this.listaColegios = this.userModel.listaColegios;
    if(this.listaColegios.indexOf(this.defaultValue.value) == -1){
      this.listaColegios.push(this.defaultValue.value);
    } */

    if (this.listaColegios.indexOf(this.defaultValue.value) == -1) {
      this.listaColegios.push("Seleccionar");
    }

    this.userModel.listaColegios.forEach(tipo => {
      this.listaColegios.push(tipo);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaNombrePage');
  }

  goToResult(){
    this.navCtrl.push(ResultPage);
  }

}
