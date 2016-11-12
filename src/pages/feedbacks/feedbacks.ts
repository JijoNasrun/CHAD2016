import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Feedbacks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feedbacks',
  templateUrl: 'feedbacks.html'
})
export class FeedbacksPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FeedbacksPage Page');
  }

}
