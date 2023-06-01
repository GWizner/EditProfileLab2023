import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../user-profile';
import { Router } from '@angular/router'


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  [x: string]: any;

  profileForm: FormGroup;
  users?: UserProfile;


  constructor(private formBuilder: FormBuilder, 
    private profileService: ProfileService, private router: Router) {
    
    
      this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      contactInfo: ['', Validators.required],
      bio: ['', [Validators.required]],
    });
   }

  // ngOnInit(): void {
  //   this.profileService.getUserProfile().subscribe((profile: UserProfile) => {
  //     this.users = profile;
  //   });
  // }


  // onSubmit() {
  //   if (this.profileForm.valid) {
  //     const user: UserProfile = this.profileForm.value;
  //     console.log(user);
      
  //     this.profileService.setUserProfile(user).subscribe();

  //     this.profileForm.reset();

  //   }
  // }


  onSubmit(): void {
    const updatedProfile: UserProfile = {
      name: this.profileForm.value.name,
      contactInfo: this.profileForm.value.contactInfo,
      bio: this.profileForm.value.bio
    };

    this.profileService.setUserProfile(updatedProfile).subscribe(() => {
    });

    this.profileForm.reset();
    this.router.navigate(['/']);
  }

}
