import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  [x: string]: any;

  
  constructor() { }

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
}