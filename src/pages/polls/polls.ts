import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Polls page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-polls',
  templateUrl: 'polls.html'
})
export class PollsPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PollsPage Page');
  }

}
