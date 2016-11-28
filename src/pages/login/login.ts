import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile'
import { NavController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginForm: FormGroup;
  private jsonParticipants: any;
  private jsonSpeakers: any;
  private loginAttempt:boolean = false;
  private loginData: any;
  private loginSuccess:boolean = false;
  constructor(public navCtrl: NavController, public http: Http, private builder: FormBuilder) {
  	this.loginForm = builder.group({
  		'email': ['', Validators.required],
  		'password': ['', Validators.required]
  		});

	this.http.get('http://10.163.1.105:8080/mobile_participants/index.json').map(res => res.json()).subscribe(data => {
		this.jsonParticipants = data.participants;
		this.jsonSpeakers = data.presenters;
	});
  }

  onSubmit(formData){	
  		this.loginData = formData;
  		for (let email of this.jsonParticipants){
			if (this.loginData.email == email.reg_email){
				for (let password of this.jsonParticipants){
					if (this.loginData.password == password.password){
						this.loginSuccess = true;
						this.loginData = this.jsonParticipants.value;
	  					console.log(this.loginData);
						break;
					}
				}
			} else {
				for (let email of this.jsonSpeakers){
					if (this.loginData.email == email.reg_email){
						for (let password of this.jsonSpeakers){
							if (this.loginData.password == password.password){
								this.loginSuccess = true;
								this.loginData = this.jsonSpeakers;
								break;
							}
						}
					}
				}
			} 
  		}
  		if (this.loginSuccess == false){
  			this.loginAttempt = true;
  		}
  		if(this.loginSuccess){
	    	this.navCtrl.push(ProfilePage, {
	    		userdata: this.loginData
	    		});
	    	this.navCtrl.setRoot(ProfilePage);
  		}
  }
}
