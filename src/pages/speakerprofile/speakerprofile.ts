import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { InAppBrowser } from 'ionic-native';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public speakerID : any;
  public speakerTopic : any;
  public speakerDescription : any;
  public speakerOrganization : any;
  public driveUrl : any;
  public feedbackSubmitted:boolean = false;
  public feedbackData: any;
  feedbackForm: FormGroup;
  feedbacks = [];

  constructor(public navCtrl: NavController,public http: Http, public params:NavParams, public userDetails: UserData, public alertCtrl: AlertController, private builder: FormBuilder) {
  	this.speakerName = params.get("speakerName");
  	this.speakerEmail = params.get("speakerEmail");
    this.speakerImage = params.get("speakerImage");
    this.speakerID = params.get("speakerID");
    this.speakerTopic = params.get("speakerTopic");
    this.speakerDescription = params.get("speakerDescription");
    this.speakerOrganization = params.get("speakerOrganization");
    this.driveUrl = params.get("speakerURL");
    this.feedbackForm = builder.group({
        'speaker_id' : this.speakerID,
        'q1' : ['', Validators.required],
        'q2' : ['', Validators.required],
        'desc' : ['']
      });
    /**if ( this.speakerEmail == this.userDetails.userdata.reg_email ){
      this.driveUrl = this.userDetails.userdata.driveurl;
    }*/
  }

  onSubmit(feedback){
    this.feedbackData = feedback;
    var feedBack = {
      feedback
    };
    let alert = this.alertCtrl.create({
      title: 'Feedback Submitted',
      subTitle: 'Thank you for your feedback! :)',
      buttons: ['OK']
      });
    alert.present();
    this.feedbackSubmitted = true;
    this.http.post('http://10.163.1.105:8081/feedbacks', feedBack)
     .map(res => res.json())
     .subscribe(data =>  { 
        this.feedbackData = data._body;
      });
  }
  openDrive(){
    let browser = new InAppBrowser(this.driveUrl, '_self');
    browser.show();
  }
}
