import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  [x: string]: any;

  
  users: UserProfile = 
    {
      name: 'Grant Chirpus',
      contactInfo: 'grant@grandcircus.co',
      bio: 'I am an Angular developer.'
    };



  getUserProfile(): Observable<UserProfile>{
    return of(this.users);
  }

  setUserProfile(profile: UserProfile): Observable<UserProfile> {
    this.users = profile;
    console.log(profile, this.users);
    return of(profile);
    
  }
 
// It has a UserProfile object with initial values for name, contact info, and bio. It has two methods...
// getUserProfile returns the profile object.
// setUserProfile replaces the profile object with a new one. (Note: Depending on how you build your code, you might not need this function.)
// (Tip: When generating the service, just call it Profile. ng will add on the Service part of the name.)

}