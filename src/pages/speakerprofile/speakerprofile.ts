import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  public speakerName : any;
  public speakerEmail : any;
  public speakerImage : any;
  constructor(public navCtrl: NavController, public params:NavParams) {
  	this.speakerName = params.get("speakerName");
  	this.speakerEmail = params.get("speakerEmail");
    this.speakerImage = params.get("speakerImage");
  }

}
