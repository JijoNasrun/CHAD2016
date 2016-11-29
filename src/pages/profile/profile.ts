import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { UserData } from '../providers/user-data';
/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage{
	public userData: any;

	  constructor(public navCtrl: NavController, public params: NavParams, public userDetails: UserData) {
	  	this.userData = this.params.get('userData');
	  	this.userDetails = this.userData;
	  	console.log('User data ', this.userData);
	  	console.log('User data ', this.userDetails);
	  }
}
