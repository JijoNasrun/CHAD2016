import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserData } from '../../providers/user-data';
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

	  constructor(public navCtrl: NavController, public userDetails: UserData) {
	  	this.userData = userDetails;
	  	console.log('User Data ', this.userData.userdata.reg_fullname);
	  	console.log('User Details ', this.userDetails);
	  }
}
