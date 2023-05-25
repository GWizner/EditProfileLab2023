import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit{

  constructor(private profileService: ProfileService) {}


  users: UserProfile = {name: '', contactInfo: '', bio: ''}


  ngOnInit(): void {
    this.profileService.getUserProfile().subscribe((profile: UserProfile) => {
      this.users = profile;
    });
  }




  // getUsers(){
  //   this.profileService.getUserProfile().subscribe(

  //     result => {
  //       this.users = result
  //       console.log(result);
  //     }

  //   );
  // }

  
}
