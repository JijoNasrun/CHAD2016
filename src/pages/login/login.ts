import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
    
  }

  login(){
  	this.navCtrl.push(ProfilePage);
  	this.navCtrl.setRoot(ProfilePage);
  }

}
