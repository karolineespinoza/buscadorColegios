import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Nav} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  rootPage:any;

  constructor(public navCtrl: NavController) {

  }

  comenzar(){
    this.navCtrl.push(TabsPage);
  }
}
