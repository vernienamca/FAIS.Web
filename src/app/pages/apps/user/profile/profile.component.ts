import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { UserService } from 'src/app/core/services/user.service';
import { PortalService } from 'src/app/core/services/portal.service';
import { RoleService } from 'src/app/core/services/role.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Subject, takeUntil } from 'rxjs';
import { ViewChild,ElementRef } from '@angular/core';

export interface RolesElement {
  description: string;
  position: string;
  date: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent {
  color: ThemePalette = 'accent';
  selectedPhoto: string | null = null;
  positions: string[] = [];
  division: string[] = [];
  TAFG: string[] = [];
  status: string[] = ['Active', 'Inactive',];
  userId: string | null;
  userInfo: any;
  USER_ROLE: RolesElement[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  lastLoginDate: string | null = null;
  TAFGControl = new FormControl();
  searchCtrl: FormControl = new FormControl();

  crumbs = [
    { name: 'Home', route: '/' },
    { name: 'My Profile', route: '/apps/profile/user-profile' },
  ];

  settingsForm = this._fb.group({
    ExampleData: '',
    accountstatus: '',
    statusdate: '',
    accexpiration: '',
    emailaddress: '',
    username: '',
    position: '',
    TAFG: '',
    division: '',
    last: '',
    mobilenumber: '',
    First: '',
    selectedPhoto: '',
    OUPFG: ''
  });

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _portalService: PortalService,
    private _roleService: RoleService,
    private _datePipe: DatePipe,
    private _router: Router
   ) { }

  userRoleCount(): number {
    return this.USER_ROLE.length;
  }
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedPhoto = `assets/img/avatars/${this.userInfo.photo}`;
  }

  isBase64(str: string): boolean {
    return /^data:image\/[a-z]+;base64,/.test(str);
  }

@ViewChild("focus") myInputField: ElementRef;
ngAfterViewInit() {
this.myInputField.nativeElement.focus();
}

  ngOnInit(): void {
    this.userId = localStorage.getItem('user_id');
    if (this.userId) {
      this._portalService.getUser(+this.userId).pipe(takeUntil(this._onDestroy$))
        .subscribe(
          (user: any) => {
            this.userInfo = user;
            this.settingsForm.setValue({
              ExampleData: this.userInfo.employeeNumber,
              accountstatus: this.userInfo.status === 1 ? 'Active' : 'Inactive',
              statusdate: this._datePipe.transform(this.userInfo.statusDate, 'MMMM d, yyyy ' ),
              accexpiration: this._datePipe.transform(this.userInfo.dateExpired, 'MMMM d, yyyy h:mm a'),
              emailaddress: this.userInfo.emailAddress,
              username: this.userInfo.userName,
              position:  this.userInfo.position,
              division: this.userInfo.division,
              TAFG: this.userInfo.tafGs,
              last: this.userInfo.lastName,
              mobilenumber: this.userInfo.mobileNumber,
              First: this.userInfo.firstName,
              selectedPhoto: this.userInfo.photo,
              OUPFG: this.userInfo.oufg,
            });
            this.settingsForm.disable();
            this.TAFGControl.setValue(this.userInfo.tafGs || []);
            this.settingsForm.get('last')?.enable();
            this.settingsForm.get('mobilenumber')?.enable();

            this._roleService.getUserRoles(+this.userId).pipe(takeUntil(this._onDestroy$)).subscribe(
              (roles: any[]) => {
                this.USER_ROLE = roles.map(role => ({
                  position: role.name,
                  description: role.description,
                  date:this._datePipe.transform(role.createdAt, 'longDate', 'en-PH'),
                }));
              },
            );
          })
    }
  
    this._userService.getLastLoginDate(+this.userId).pipe(takeUntil(this._onDestroy$))
    .subscribe((lastLoginDate: any) => {
        this.lastLoginDate = this._datePipe.transform(lastLoginDate, 'MMMM d, yyyy h:mm a', 'en-US');
      }
    );
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  closeProfile():void {
    this._router.navigate(['/']);
  }

  save() {
    const userIdNumber = +this.userId;
    const updatedUserData = {
      lastName: this.settingsForm.get('last')?.value,
      mobilenumber: this.settingsForm.get('mobilenumber')?.value,
      updatedBY: userIdNumber
    };

    this._userService.updateUser(userIdNumber, updatedUserData).pipe(takeUntil(this._onDestroy$)).subscribe({
      next: (result) => {
        console.log('User updated successfully:', result);
      },
      error: (error) => {
        console.error('Error updating user:', error);
      }
    });
  }
}
    