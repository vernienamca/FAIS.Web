import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { stagger60ms } from '../../../../../@vex/animations/stagger.animation';
import { colors } from 'src/static-data/colors';
import { SecurityService } from 'src/app/core/services/security.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';
import { Router } from '@angular/router';

export interface CountryState {
  name: string;
  population: string;
  flag: string;
}

@Component({
  selector: 'vex-form-elements',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})
export class ChangePasswordComponent implements OnInit, OnDestroy {
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');
  colors = colors;
  oldPasswordInputType = 'password';
  newPasswordInputType = 'password';
  confirmPasswordInputType = 'password';
  isOldPasswordVisible = false;
  isNewPasswordVisible = false;
  isConfirmPasswordVisible = false;
  minPasswordLength: number;
  minSpecialCharacters: number;
  hasMinPasswordLength = false;
  hasAtLeastOneNumber = false;
  hasAtLeastOneLowercaseChar = false;
  hasAtLeastOneUppercaseChar = false;
  hasMinSpecialCharacters = false;
  isValidPasswordCriteria = true;
  user: any;

  get formControls() {
    return {
      oldPassword: this.form.get('oldPassword'),
      newPassword: this.form.get('newPassword'),
      confirmPassword: this.form.get('confirmPassword')
    };
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _securityService: SecurityService,  
    private _portalService: PortalService,
    private _snackBar: MatSnackBar
    ) { 
      this.form = this._fb.group({
        oldPassword: ['', [Validators.required]],
        newPassword: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      });

      this._securityService.getSettings(1)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
          if (!data) {
            return;
          }
          this.minPasswordLength = data.minPasswordLength;
          this.minSpecialCharacters = data.minSpecialCharacters;
        });

      const userId = parseFloat(localStorage.getItem('user_id'));
      if (!userId) {
        return;
      }
      this._portalService.getUser(userId)
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
          this.user = data;
          if (!data) {
            return;
          }
        });
    }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  toggleOldPasswordVisibility(): void {
    if (this.isOldPasswordVisible) {
      this.oldPasswordInputType = 'password';
      this.isOldPasswordVisible = false;
      this._cd.markForCheck();
    } else {
      this.oldPasswordInputType = 'text';
      this.isOldPasswordVisible = true;
      this._cd.markForCheck();
    }
  }

  toggleNewPasswordVisibility(): void {
    if (this.isNewPasswordVisible) {
      this.newPasswordInputType = 'password';
      this.isNewPasswordVisible = false;
      this._cd.markForCheck();
    } else {
      this.newPasswordInputType = 'text';
      this.isNewPasswordVisible = true;
      this._cd.markForCheck();
    }
  }

  toggleConfirmPasswordVisibility(): void {
    if (this.isConfirmPasswordVisible) {
      this.confirmPasswordInputType = 'password';
      this.isConfirmPasswordVisible = false;
      this._cd.markForCheck();
    } else {
      this.confirmPasswordInputType = 'text';
      this.isConfirmPasswordVisible = true;
      this._cd.markForCheck();
    }
  }

  onValidatePasswordCriteria(event: any): void {
    this.hasMinPasswordLength = event.target.value.length >= this.minPasswordLength;
    this.hasAtLeastOneNumber = /[0-9]/.test(event.target.value);
    this.hasAtLeastOneLowercaseChar = /[a-z]/.test(event.target.value);
    this.hasAtLeastOneUppercaseChar = /[A-Z\s]+/.test(event.target.value);
    this.hasMinSpecialCharacters = (event.target.value.match(/[@$%^&*()_+\-=\[\]{};':"\\|,.<>\/]/g) || []).length >= this.minSpecialCharacters;
    this.isValidPasswordCriteria = !this.hasMinPasswordLength || !this.hasAtLeastOneNumber || !this.hasAtLeastOneLowercaseChar 
      || !this.hasAtLeastOneUppercaseChar || !this.hasMinSpecialCharacters
  }

  save(): void {
    if (!this.formControls.oldPassword.value) {
      this.formControls.oldPassword.markAsTouched();
      this.formControls.oldPassword.updateValueAndValidity();
      return;
    }
    if (!this.formControls.confirmPassword.value) {
      this.formControls.confirmPassword.markAsTouched();
      this.formControls.confirmPassword.updateValueAndValidity();
      return;
    }
    if (this.formControls.newPassword.value !== this.formControls.confirmPassword.value) {
      this._snackBar.open('The password confirmation does not match.', 'Close', {
        duration: 10000
      });
      return;
    }
    console.log(this.user.id);
    console.log(this.formControls.oldPassword.value);
    console.log(this.formControls.newPassword.value);

    this._securityService.changePassword(this.user.id, this.formControls.oldPassword.value, this.formControls.newPassword.value)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        if (!data.id) {
          this._snackBar.open(data.errorDescription, 'Close', {
            duration: 10000
          });
          return;
        }
        this._snackBar.open('Your password has been successfully changed. You will beredirected after 5 seconds.', 'Okay');
        window.setTimeout(function() {
          localStorage.clear();
          location.href = '/login'
        }, 5000);
      });
  }
}
