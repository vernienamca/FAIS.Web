import { Component } from '@angular/core';
import { FormBuilder,UntypedFormControl,FormControl,Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { UserService } from 'src/app/core/services/user.service';
import { PortalService } from 'src/app/core/services/portal.service';
import { RoleService } from 'src/app/core/services/role.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Subject, takeUntil } from 'rxjs';
import { ViewChild,ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  layoutCtrl = new UntypedFormControl('fullwidth');
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
  TAFGControl = new FormControl();
  searchCtrl: FormControl = new FormControl();

  crumbs = [
    { name: 'Home', route: '/' },
    { name: 'My Profile', route: '/apps/profile' },
  ];

  settingsForm = this._fb.group({
    ExampleData: '',
    accountstatus: '',
    statusdate: '',
    accexpiration: '',
    emailaddress: '',
    username:'',
    position: '',
    TAFG: '',
    division: '',
    last: ['', Validators.required],
    mobilenumber: ['', [Validators.required, Validators.pattern(/^\+?\d{11,12}$/)]],
    First: '',
    selectedPhoto: '',
    OUPFG: '',
    lastLoginDate: ''
  });

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _portalService: PortalService,
    private _roleService: RoleService,
    private _datePipe: DatePipe,
    private _router: Router,
    private _snackBar:MatSnackBar,
   ) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('user_id');
    if (this.userId) {
      this._portalService.getUser(+this.userId)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe((user: any) => {
          if (!user) {
            return;
          }
          this.userInfo = user;
          this.settingsForm.setValue({
            ExampleData: this.userInfo.employeeNumber,
            accountstatus: this.userInfo.status === 1 ? 'Active' : 'Inactive',
            statusdate: this._datePipe.transform(this.userInfo.statusDate, 'MMMM d, yyyy '),
            accexpiration: this._datePipe.transform(this.userInfo.dateExpired, 'MMMM d, yyyy h:mm a'),
            emailaddress: this.userInfo.emailAddress,
            username: this.userInfo.userName,
            position: this.userInfo.position,
            division: this.userInfo.division,
            TAFG: this.userInfo.tafGs,
            last: this.userInfo.lastName,
            mobilenumber: this.userInfo.mobileNumber,
            First: this.userInfo.firstName,
            selectedPhoto: this.userInfo.photo,
            OUPFG: this.userInfo.oufg,
            lastLoginDate: this._datePipe.transform(this.userInfo.lastLoginDate, 'MMMM d, yyyy h:mm a'),
          });
      
          this.TAFGControl.setValue(this.userInfo.tafGs || []);
          this.settingsForm.get('last')?.enable();
          this.settingsForm.get('mobilenumber')?.enable();
  
          this._roleService.getUserRoles(+this.userId)
            .pipe(takeUntil(this._onDestroy$))
            .subscribe((roles: any[]) => {
              this.USER_ROLE = roles.map(role => ({
                position: role.name,
                description: role.description,
                date: this._datePipe.transform(role.createdAt, 'longDate'),
              }));
            });
        });
    }
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  closeProfile():void {
    this._router.navigate(['/']);
  }

  save(): void {
    console.log('Save function called');
    const userIdNumber = +this.userId;
    const data = {
      lastName: this.settingsForm.get('last')?.value,
      mobilenumber: this.settingsForm.get('mobilenumber')?.value,
      updatedBY: userIdNumber
    };

    this._userService.updateUser(userIdNumber,data)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
     
    });
    this._snackBar.open('User updated successfully', 'OK', {
      duration: 3000,
    });
  }
}


  