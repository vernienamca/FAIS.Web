import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { UserService } from 'src/app/core/services/user.service';
import { PortalService } from 'src/app/core/services/portal.service';
import { RoleService } from 'src/app/core/services/role.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

export interface RolesElement {
  description: string;
  position: string;
  date: string;
  isToggled: boolean,
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent{

  color: ThemePalette = 'accent';
  isToggled: boolean = false;
  selectedPhoto: string | null = null;
  positions: string[] = [];
  division: string[] = [];
  status: string[] = ['Active', 'Inactive',];
  searchCtrl: FormControl = new FormControl();
  userId: string | null;
  userInfo: any;
  USER_ROLE: RolesElement[] = [];

  settingsForm = this._fb.group({
    ExampleData: '', 
    accountstatus:'',
    statusdate:'',
    accexpiration:'',
    emailaddress:'',
    username: '', 
    position:'',
    TAFG:'',
    division:'',
    last:'',
    mobilenumber: '',
    First:'',
    selectedPhoto:'',
    OUPFG: ''
  });

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService, 
    private _portalService: PortalService,
    private _roleService: RoleService,
    private _datePipe: DatePipe,
    private _router: Router ) {}

  handleToggle(element: RolesElement) {
    element.isToggled = !element.isToggled;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (this.isBase64(this.userInfo.photo)) {
        this.selectedPhoto = this.userInfo.photo;
      } else {
        this.selectedPhoto = `assets/img/avatars/${this.userInfo.photo}`;
      }

    }
  }
  
  isBase64(str: string): boolean {
    return /^data:image\/[a-z]+;base64,/.test(str);
  }


  ngOnInit(): void {
    this.userId = localStorage.getItem('user_id');
    if (this.userId) {
      this._portalService.getUser(+this.userId)
        .subscribe(
          (user: any) => {
            this.userInfo = user; 
            this.settingsForm.setValue({
              ExampleData: this.userInfo.employeeNumber,
              accountstatus:this.userInfo.statusCode === 1 ? 'Active' : 'Inactive',
              statusdate: this._datePipe.transform(this.userInfo.statusDate, 'yyyy-MM-dd', 'en-PH'),
              accexpiration: this._datePipe.transform(this.userInfo.dateExpired,'yyyy-MM-dd'),
              emailaddress: this.userInfo.emailAddress,
              username: this.userInfo.userName,
              position: this.userInfo.position,
              division: this.userInfo.division,
              TAFG: '',
              last: this.userInfo.lastName,
              mobilenumber:this.userInfo.mobileNumber, 
              First: this.userInfo.firstName,
              selectedPhoto: this.userInfo.photo,
              OUPFG: this.userInfo.oupFgId,
            });
            this.settingsForm.disable();
            this.settingsForm.get('last')?.enable();
            this.settingsForm.get('mobilenumber')?.enable();

            this._roleService.getById(+this.userId).subscribe(
              (roleInfo: any) => {
                this.USER_ROLE = [{
                  position: roleInfo.name,
                  description: roleInfo.description,
                  date: this._datePipe.transform(roleInfo.createdAt,'yyyy-MM-dd'),
                  isToggled: true,
                }];
              },
            );
          })
    }
    
    this._userService.getLibraryNamesByCode('PST').subscribe(
      (positionData) => {
        if (positionData) {
          this.positions = positionData; 
        }
      }
    );
  
    this._userService.getLibraryNamesByCode('DIV').subscribe(
      (divisionData) => {
        if (divisionData) {
          this.division = divisionData; 
        }
      }
    );
  }

  closeProfile() {
    this._router.navigate(['/']); 
  }
  

save() {
  const userIdNumber = +this.userId;
  const updatedUserData = {
    lastName: this.settingsForm.get('last')?.value,
    mobilenumber: this.settingsForm.get('mobilenumber')?.value,
    updatedBY: userIdNumber
  };

  this._userService.updateUser(userIdNumber, updatedUserData).subscribe(
    (result) => {
      console.log('User updated successfully:', result);
    },
    (error) => {
      console.error('Error updating user:', error);
    }
  );
}
}
