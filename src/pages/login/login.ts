import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile'
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public http: Http) {
  }

  login(){
  	this.navCtrl.push(ProfilePage);
  	this.navCtrl.setRoot(ProfilePage);
  }
}
