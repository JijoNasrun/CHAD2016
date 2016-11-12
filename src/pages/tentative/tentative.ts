import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tentative page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tentative',
  templateUrl: 'tentative.html'
})
export class TentativePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TentativePage Page');
  }

}
