import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ParticipantList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-participant-list',
  templateUrl: 'participant-list.html'
})
export class ParticipantListPage {
	public participant: any;

	  constructor(public navCtrl: NavController, public http: Http) {
	  	this.http.get('http://192.168.0.222:3000/mobile_participants/index.json').map(res => res.json()).subscribe(data => {
	  		this.participant = data.participants;
	  	});
	  }

}
