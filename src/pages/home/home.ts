import { Component, ViewChild } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, private msService: MicroservicioService, public userModel: UsuarioModel,   private loadCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    const loading = this.loadCtrl.create({
      content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box"></div>
      </div>`
    });
    loading.present();
    console.log('ionViewDidLoad BusquedaFiltrosPage');

    this.msService.makeGetRequestSin('microserviciosBuscarColegios', 'obtenerParametria')
    .subscribe((response) => {
        this.userModel.listaColegios = response.colegios;
        this.userModel.listaComunas = response.comunas;
        this.userModel.listaTipoColegios = response.tiposColegio;
        this.userModel.listaCiudades = response.ciudades;
        this.userModel.listaRegiones = response.regiones;
       
        loading.dismiss();
      },(error) => {
        loading.dismiss();
        console.log("Error: " + error);
      }
    );
  }

  comenzar(){
    this.navCtrl.push(TabsPage);
  }
}
