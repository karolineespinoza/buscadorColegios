import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { FavoritosPage } from '../pages/favoritos/favoritos';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from '../services/auth.service';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { SignupPage } from '../pages/signup/signup';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { BusquedaFiltrosPage } from '../pages/busqueda-filtros/busqueda-filtros';
import { BusquedaGeolocalizacionPage } from '../pages/busqueda-geolocalizacion/busqueda-geolocalizacion';
import { BusquedaNombrePage } from '../pages/busqueda-nombre/busqueda-nombre';
import { Geolocation } from '@ionic-native/geolocation';
import { ResultPage } from '../pages/result/result';

export const firebaseConfig = {
  apiKey: "AIzaSyAvYzM1bqFjoVi-VGMHeDbN0XwFsYDtLQ0",
  authDomain: "demo104-60efc.firebaseapp.com",
  databaseURL: "https://demo104-60efc.firebaseio.com",
  projectId: "demo104-60efc",
  storageBucket: "demo104-60efc.appspot.com",
  messagingSenderId: "903778168776"
};

@NgModule({
  declarations: [
    MyApp,
    FavoritosPage,
    LoginPage,
    HomePage,
    TabsPage,
    SignupPage,
    BusquedaPage,
    BusquedaFiltrosPage,
    BusquedaGeolocalizacionPage,
    BusquedaNombrePage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'demo104'),
    AngularFireDatabaseModule,
    NgxErrorsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritosPage,
    LoginPage,
    HomePage,
    TabsPage,
    SignupPage,
    BusquedaPage,
    BusquedaFiltrosPage,
    BusquedaGeolocalizacionPage,
    BusquedaNombrePage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
