import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { FilesPage } from '../pages/files/files';

import { ParticipantListPage } from '../pages/participant-list/participant-list';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { FeedbacksPage } from '../pages/feedbacks/feedbacks';
import { PollsPage } from '../pages/polls/polls';
import { TentativePage } from '../pages/tentative/tentative';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Profile', component: Page1 },
      { title: 'Tentative', component: TentativePage },
      { title: 'Participant List', component: ParticipantListPage },
      { title: 'Speaker List', component: SpeakerListPage },
      { title: 'Polls', component: PollsPage },
      { title: 'Files', component: FilesPage },
      { title: 'Feedbacks', component: FeedbacksPage }
      
     
      
     
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
