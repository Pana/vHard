import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoggerProvider } from '../providers/logger/logger';
import { AppProvider } from '../providers/app/app';
import { ProfileProvider } from '../providers/profile/profile';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    private logger: LoggerProvider,
    private app: AppProvider,
    private profile: ProfileProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.app.load().then(() => {
        this.profile.getProfile().then((profile) => {
          console.log('profile: ', profile);
          if (!profile) {
            this.logger.info('No profile exists.');
            this.profile.createProfile();
          }
          statusBar.styleDefault();
          splashScreen.hide();
        });
      });
    });
  }
}
