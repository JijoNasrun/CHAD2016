import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SpeakerprofilePage } from '../speakerprofile/speakerprofile';
import 'rxjs/add/operator/map';

/*
  Generated class for the SpeakerList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html'
})
export class SpeakerListPage {
	public speaker: any;

	  constructor(public navCtrl: NavController, public http: Http) {
	  	this.http.get('http://10.163.1.105:8080/mobile_participants/index.json').map(res => res.json()).subscribe(data => {
	  		this.speaker = data.participants;
	  		//presenters
	  	});
	  }
	  goToSpeakerPage(speakername, speakeremail, speakerid, speakerimage, speakertopic, speakerdescription, speakerorganization){
	  	this.navCtrl.push(SpeakerprofilePage, {
	  		speakerName: speakername,
	  		speakerEmail: speakeremail,
	  		speakerImage: speakerimage,
	  		speakerID: speakerid,
	  		speakerTopic: speakertopic,
	  		speakerDescription: speakerdescription,
	  		speakerOrganization: speakerorganization
	  		});
	  }

}