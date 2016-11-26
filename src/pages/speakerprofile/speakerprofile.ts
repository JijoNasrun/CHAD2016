import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Speakerprofile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-speakerprofile',
  templateUrl: 'speakerprofile.html'
})
export class SpeakerprofilePage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SpeakerprofilePage Page');
  }

}
