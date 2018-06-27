import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import { MicroservicioService } from '../../services/microservicio.service';

import { TabsPage } from '../tabs/tabs';
import { UsuarioModel } from '../../models';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  rootPage:any;

  constructor(public navCtrl: NavController, private msService: MicroservicioService, public userModel: UsuarioModel) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusquedaFiltrosPage');

    this.msService.makeGetRequestSin('microserviciosBuscarColegios', 'obtenerParametria')
    .subscribe((response) => {
        this.userModel.listaColegios = response.colegios;
        this.userModel.listaComunas = response.comunas;
        this.userModel.listaTipoColegios = response.tiposColegio;
      },(error) => {
        console.log("Error: " + error);
      }
    );
  }

  comenzar(){
    this.navCtrl.push(TabsPage);
  }
}
