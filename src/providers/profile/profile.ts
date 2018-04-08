import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PersistentProvider } from '../persistent/persistent';

import { Profile } from '../../models/profile';

@Injectable()
export class ProfileProvider {

  public profile: Profile;

  constructor(
    public http: HttpClient,
    private persistent: PersistentProvider
  ) {
    console.log('Hello ProfileProvider Provider');
  }

  public getProfile(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.persistent.getProfile().then((profile) => {
        resolve(profile);
      });
    });
  }

  public createProfile(): void {
    this.profile = new Profile();
    this.profile = this.profile.create();
    this.persistent.storeNewProfile(this.profile);
  }

}
