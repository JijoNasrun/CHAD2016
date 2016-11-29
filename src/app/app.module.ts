import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UserData } from '../providers/user-data';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile'
import { ParticipantListPage } from '../pages/participant-list/participant-list';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { CommitteeListPage } from '../pages/committee-list/committee-list';
import { FeedbacksPage } from '../pages/feedbacks/feedbacks';
import { PollsPage } from '../pages/polls/polls';
import { TentativePage } from '../pages/tentative/tentative';
import { SpeakerprofilePage } from '../pages/speakerprofile/speakerprofile';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ProfilePage,
    TentativePage,
    PollsPage,FeedbacksPage,
    ParticipantListPage,
    SpeakerListPage,
    SpeakerprofilePage,
    CommitteeListPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProfilePage,
    TentativePage,
    PollsPage,FeedbacksPage,
    ParticipantListPage,
    SpeakerListPage,
    SpeakerprofilePage,
    CommitteeListPage,
  ],
  providers: [
    UserData
  ]
})
export class AppModule {}
