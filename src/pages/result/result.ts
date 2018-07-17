import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusquedaGeolocalizacionPage } from '../busqueda-geolocalizacion/busqueda-geolocalizacion';
import { VerMapaPage } from '../ver-mapa/ver-mapa';
import { UsuarioModel } from '../../models';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {

  resultados: Array<Object> = [
    {
      nombreColegio: "Academia de Humanidades",
      direccion: "Av. Recoleta 797",
      website: "http://www.academiahumanidades.cl/"
    },
    {
      nombreColegio: "Liceo Leonardo Murialdo",
      direccion: "Sta Filomena 159",
      website: "http://www.liceomurialdo.cl/"
    },
    {
      nombreColegio: "Albert Einstein",
      direccion: "El Roble 1172",
      website: "Sitio web no encontrado."
    }
  ];
 /*  nombreColegio: string = "Academia de Humanidades";
  direccion: string = "Av. Recoleta 1234";
  website: string = "http://www.academia.cl"; */
  
  favorito: boolean = false;
  buttonColor: string = "#BFC9CA"
 

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioModel: UsuarioModel) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultPage');
  }

  addFavoritos(event) {
    console.log(event);
    if (!this.favorito) {
      this.buttonColor = '#ffbf00';
      this.favorito = true;
      //this.usuarioModel.favoritos.push();
    }
    else {
      this.buttonColor = '#BFC9CA';
      this.favorito = false;
    }
  }

  verMapa() {
    this.navCtrl.push(VerMapaPage, { "latitude": "-33.4235293", "longitude": "-70.6451146" });
  }
}
