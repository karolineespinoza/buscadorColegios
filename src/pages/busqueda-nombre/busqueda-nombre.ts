import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaNombrePage');
  }

  goToResult(){
    this.navCtrl.push(ResultPage);
  }

}
