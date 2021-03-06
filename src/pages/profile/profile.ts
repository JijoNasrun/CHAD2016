import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
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
      console.log('Profile Data ', this.userData.userdata);
	  }
  logOut(){
    this.navCtrl.setRoot(LoginPage);
  }
}
