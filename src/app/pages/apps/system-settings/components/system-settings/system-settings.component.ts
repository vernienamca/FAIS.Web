import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PortalService } from 'src/app/core/services/portal.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { SecurityService } from 'src/app/core/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class SystemSettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  layoutCtrl = new UntypedFormControl('fullwidth');
  inputType = 'password';
  visible = false;
  hasUpdateAccess = false;

  private _onDestroy$ = new Subject<void>();

  get formControls() {
    return {
      companyName: this.form.get('companyName'),
      phoneNumber: this.form.get('phoneNumber'),
      emailAddress: this.form.get('emailAddress'),
      website: this.form.get('website'),
      address: this.form.get('address'),
      minPasswordLength: this.form.get('minPasswordLength'),
      minSpecialCharacters: this.form.get('minSpecialCharacters'),
      passwordExpiry: this.form.get('passwordExpiry'),
      idleTime: this.form.get('idleTime'),
      maxSignOnAttempts: this.form.get('maxSignOnAttempts'),
      enforcePasswordHistory: this.form.get('enforcePasswordHistory'),
      smtpServerName: this.form.get('smtpServerName'),
      smtpPort: this.form.get('smtpPort'),
      smtpFromEmail: this.form.get('smtpFromEmail'),
      smtpPassword: this.form.get('smtpPassword'),
      smtpEnableSSL: this.form.get('smtpEnableSSL')
    };
  }

  constructor(
    private _fb: FormBuilder,
    private _portalService: PortalService,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _securityService: SecurityService
  ) {
    this.form = this._fb.group({
      companyName: ['', Validators.required],
      phoneNumber : ['', Validators.required],
      emailAddress: ['', Validators.required],
      website: ['', []],
      address: ['', Validators.required],
      minPasswordLength: ['', Validators.required],
      minSpecialCharacters: ['', Validators.required],
      passwordExpiry: ['', Validators.required],
      idleTime: ['', Validators.required],
      maxSignOnAttempts: ['', Validators.required],
      enforcePasswordHistory: ['', Validators.required],
      smtpServerName: ['', []],
      smtpPort: ['', []],
      smtpFromEmail: ['', []],
      smtpPassword: ['', []],
      smtpEnableSSL: ['']
    });

    const userId = parseFloat(localStorage.getItem('user_id'));
    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === 5);
        if (permission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        if (permission.some(s => s.isUpdate) === false) {
          this.form.controls['companyName'].disable();
          this.form.controls['phoneNumber'].disable();
          this.form.controls['emailAddress'].disable();
          this.form.controls['website'].disable();
          this.form.controls['address'].disable();
          this.form.controls['minPasswordLength'].disable();
          this.form.controls['minSpecialCharacters'].disable();
          this.form.controls['passwordExpiry'].disable();
          this.form.controls['idleTime'].disable();
          this.form.controls['maxSignOnAttempts'].disable();
          this.form.controls['enforcePasswordHistory'].disable();
          this.form.controls['smtpServerName'].disable();
          this.form.controls['smtpPort'].disable();
          this.form.controls['smtpFromEmail'].disable();
          this.form.controls['smtpPassword'].disable();
          this.form.controls['smtpEnableSSL'].disable();
        }
        this.hasUpdateAccess = permission.some(s => s.isUpdate);
      });
  }

  ngOnInit(): void {    
    this._portalService.getSetting(1)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this._initializeData(data)
      });    
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  save(): void {
    const data = Object.assign({}, this.form.value);
    data.updatedBy = parseInt(localStorage.getItem('user_id'));

    this._portalService.updatesettings(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Settings has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
      });
  }

  private _initializeData(data: any): void {
    this.form.setValue({
      companyName: data.companyName,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      website: data.website,
      address: data.address,
      minPasswordLength: data.minPasswordLength,
      minSpecialCharacters: data.minSpecialCharacters,
      passwordExpiry: data.passwordExpiry,
      idleTime: data.idleTime,
      maxSignOnAttempts: data.maxSignOnAttempts,
      enforcePasswordHistory: data.enforcePasswordHistory.toString(),
      smtpServerName: data.smtpServerName,
      smtpPort: data.smtpPort,
      smtpFromEmail: data.smtpFromEmail,
      smtpPassword: data.smtpPassword,
      smtpEnableSSL: data.smtpEnableSSL
    });
  }
}
