import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';
import { NavController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { UserData } from '../../providers/user-data';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  public speakerQuality : any;
  public contentValue : any;
  public commentData : any;
  loginForm: FormGroup;
  public jsonParticipants: any;
  public jsonSpeakers: any;
  public jsonCommittee: any;
  public loginData: any;
  public profileData: any;
  public loginSuccess:boolean = false;

  constructor(public navCtrl: NavController, public http: Http, private builder: FormBuilder, private menu:MenuController, public userDetails: UserData, public toastCtrl: ToastController) {
  	this.loginForm = builder.group({
  		'email': ['', Validators.required],
  		'password': ['', Validators.required]
  		});

	this.http.get('http://10.163.1.105:8080/mobile_participants/index.json').map(res => res.json()).subscribe(data => {
		this.jsonParticipants = data.participants;
		this.jsonSpeakers = data.presenters;
		this.jsonCommittee = data.committee;
	});
  }

  onSubmit(formData){	
  		this.loginData = formData;
  		for (let email of this.jsonParticipants){
			if (this.loginData.email == email.reg_email){
				for (let password of this.jsonParticipants){
					if (this.loginData.password == password.password){
						this.loginSuccess = true;
						this.profileData = email;
						this.userDetails.updateData(this.profileData);
						break;
					}
				}
			}
  		}
		for (let email of this.jsonSpeakers){
			if (this.loginData.email == email.reg_email){
				for (let password of this.jsonSpeakers){
					if (this.loginData.password == password.password){
						this.loginSuccess = true;
						this.profileData = email;
						this.userDetails.updateData(this.profileData);
						break;
					}
				}
			}
		}
		for (let email of this.jsonCommittee){
			if (this.loginData.email == email.reg_email){
				for (let password of this.jsonCommittee){
					if (this.loginData.password == password.password){
						this.loginSuccess = true;
						this.profileData = email;
						this.userDetails.updateData(this.profileData);
						break;
					}
				}
			}
		}
  		if (this.loginSuccess == false){
  			let toast = this.toastCtrl.create({
  				message: 'Please fill in the credentials correctly',
  				duration: 3000
  				});
  			toast.present();
  		}
  		if(this.loginSuccess){
  			this.navCtrl.setRoot(ProfilePage);
		}
  }
}
