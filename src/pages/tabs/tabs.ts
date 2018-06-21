import { Component } from '@angular/core';

import { FavoritosPage } from '../favoritos/favoritos';
import { LoginPage } from '../login/login';
import { BusquedaPage } from '../busqueda/busqueda';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = BusquedaPage;
  tab2Root =FavoritosPage;
  tab3Root = LoginPage;

  constructor() {

  }
}
