import { DatePipe } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, finalize, takeUntil } from 'rxjs';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { IUser, IUserRole } from 'src/app/core/models/user';
import { PortalService } from 'src/app/core/services/portal.service';
import { SecurityService } from 'src/app/core/services/security.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})

export class UserComponent implements OnInit, OnDestroy {
  @Input() min: any;
  yesterday = new Date();
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  dataSource = [];
  searchCtrl: FormControl = new FormControl();
  userRoleTabLabel: string = 'User Roles (0)';
  userRoles: IUserRole[] = [];
  pageLabel: string = 'Edit User';
  userId: number;
  photo: string;
  createdBy: string;
  createdAt: Date;
  updatedBy: string;
  updatedAt: Date;
  isSaving: boolean;
  hasAccess = false;
  
  get formControls() {
    return {
      employeeNumber: this.form.get('employeeNumber'),
      username: this.form.get('username'),
      position: this.form.get('position'),
      firstName: this.form.get('firstName'),
      lastName: this.form.get('lastName'),
      emailAddress: this.form.get('emailAddress'),
      mobileNumber: this.form.get('mobileNumber'),
      taFG: this.form.get('taFG'),
      oupFG: this.form.get('oupFG'),
      division: this.form.get('division'),
      accountStatus: this.form.get('accountStatus'),
      statusDate: this.form.get('statusDate'),
      accountExpiration: this.form.get('accountExpiration')
    };
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _securityService: SecurityService,
    private _snackBar: MatSnackBar,
    private _datePipe: DatePipe
  ) {
    this.yesterday.setDate(this.yesterday.getDate() - 0);

    this.userId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.form = this._fb.group({
      employeeNumber: ['', []],
      username: ['', [Validators.required]],
      position: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      taFG: ['', []],
      oupFG: ['', []],
      division: ['', []],
      accountStatus: ['', [Validators.required]],
      statusDate: ['', []],
      accountExpiration: ['', []]
    });

    this._securityService.userRoles$.subscribe(item => {
      this.userRoles = item;
    });

    this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === 21);
        if (!permission || permission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        if (permission.some(s => s.isUpdate) === false) {
          this.form.controls['position'].disable();
          this.form.controls['firstName'].disable();
          this.form.controls['lastName'].disable();
          this.form.controls['emailAddress'].disable();
          this.form.controls['mobileNumber'].disable();
          this.form.controls['taFG'].disable();
          this.form.controls['oupFG'].disable();
          this.form.controls['division'].disable();
          this.form.controls['accountStatus'].disable();
          this.form.controls['accountExpiration'].disable();
        }
        this.hasAccess = permission.some(s => s.isUpdate);
      });

    if (this.userId) {
      this._portalService.getUser(this.userId)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
          if (!data) {
            return;
          }
          this._initializeData(data);
          this._getUserRoles(this.userId);
          this._disableFormControls();
        });
      return;
    }
    this.pageLabel = 'Add User';
    this.photo = `assets/img/avatars/default.png`
    this.formControls.statusDate.setValue(this._datePipe.transform(new Date(), 'longDate'))
    this.form.controls['statusDate'].disable();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  save(): void {
    this.isSaving = true;
    const data = Object.assign({}, this.form.value);
    if (!this.photo.includes('assets/img/')) {
      data.photo = this.photo.split(',')[1];
    }
    data.employeeNumber = this.formControls.employeeNumber.value;

    if (this.userId) {
      data.userRoles = this.userRoles;
      data.updatedBy = parseInt(localStorage.getItem('user_id'));
      this._updateUser(data);
      return;
    }

    data.createdBy = parseInt(localStorage.getItem('user_id'));
    this._createUser(data);
  }

  selectFile(event: any): void {
    if (!event.target.files) {
      return;
    }
    const file: File = event.target.files.item(0);
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.photo = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  private _initializeData(data: any): void {
    this.form.setValue({
      employeeNumber: data.employeeNumber,
      username: data.userName,
      position: data.position,
      firstName: data.firstName,
      lastName: data.lastName,
      emailAddress: data.emailAddress,
      mobileNumber: data.mobileNumber,
      taFG: data.tafGs || [],
      oupFG: data.oufg || '',
      division: data.division || '',
      accountStatus: data.status.toString(),
      statusDate: `${this._datePipe.transform(data.statusDate, 'longDate')}` || '',
      accountExpiration: data.dateExpired
    });
    this.photo = data.photo ? `assets/img/avatars/${data.photo}` : '';
    this.createdBy = data.createdBy;
    this.createdAt = data.createdAt;
    this.updatedBy = data.updatedBy || 'N/A';
    this.updatedAt = data.updatedAt;
  }

  private _disableFormControls(): void {
    this.form.controls['employeeNumber'].disable();
    this.form.controls['username'].disable();
    this.form.controls['statusDate'].disable();
  }

  private _createUser(data: IUser): void {
    this._securityService.createUser(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        if (data.errorDescription) {
        let snackBarRef = this._snackBar.open(data.errorDescription, 'Close');
          snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      }
      else {
        let snackBarRef = this._snackBar.open('User has been successfully saved.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          this._router.navigate([`apps/users/edit/${data.id}`]);
        }); 
        }
      });
  }

  private _updateUser(data: IUser): void {
    this._securityService.updateUser(this.userId, false, data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        if (data.errorDescription) {
          let snackBarRef = this._snackBar.open(data.errorDescription, 'Close');
            snackBarRef.afterDismissed().subscribe(() => {
            window.location.reload();
          });
        }
        else {
        let snackBarRef = this._snackBar.open('User has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      }
      });
  }

  private _getUserRoles(userId: number): void {
    this._portalService.getUserRoles(userId)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      this.userRoles = data;
      this.userRoleTabLabel = `User Roles (${data?.length})`;
      this._securityService.userRoles$.next(data);
    });
  }
}
