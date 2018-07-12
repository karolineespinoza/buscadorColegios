import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
//import { Geolocation } from '@ionic-native/geolocation';
import { UsuarioModel } from '../../models';
declare var google;
/**
 * Generated class for the VerMapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-mapa',
  templateUrl: 'ver-mapa.html',
})
export class VerMapaPage {

  map;
  public lat: string;
  public lon: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    //private geolocation: Geolocation,
    private loadCtrl: LoadingController,
    private userModel: UsuarioModel
  ) {
    console.log(this.navParams.get("data"));
  }


  ionViewDidLoad() {
    const loading = this.loadCtrl.create();
    loading.present();

    this.lat = this.navParams.get("latitude");
    this.lon = this.navParams.get("longitude");

    loading.dismiss();
    // (-33.4235293, -70.6451146)
    this.loadMap(Number(this.lat), Number(this.lon));
  }

  loadMap(latitude: number, longitude: number) {
    let mapEle: HTMLElement = document.getElementById('map');

    this.map = new google.maps.Map(mapEle, {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom: 18
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      const marker = new google.maps.Marker({
        position: {
          lat: latitude,
          lng: longitude
        },
        map: this.map,
        title: 'Hello World!'
      });
      mapEle.classList.add('show-map');
    });
  }

}
