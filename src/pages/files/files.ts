import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';

/*
  Generated class for the Files page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-files',
  templateUrl: 'files.html'
})
export class FilesPage {

  public url = "ftp://192.168.11.73";
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('Hello FilesPage Page');
  }

  openCordovaWebView()
 {
	let browser = new InAppBrowser(this.url, '_blank');
	browser.show();
 }


}
