import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { SecurityService } from 'src/app/core/services/security.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'vex-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']

})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  form: FormGroup; 
  isPasswordReset = false;
  icon = faCheck;
  passwordInputType = 'password';
  confirmPasswordInputType = 'password';
  isPasswordVisible = false;
  isConfirmPasswordVisible = false;
  tempKey: string;
  minPasswordLength: number;
  minSpecialCharacters: number;
  hasMinPasswordLength = false;
  hasAtLeastOneNumber = false;
  hasAtLeastOneLowercaseChar = false;
  hasMinSpecialCharacters = false;

  get formControls() {
    return {
      password: this.form.get('password'),
      confirmPassword: this.form.get('confirmPassword')
    };
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _route: ActivatedRoute,
    private _router: Router,
    private _securityService: SecurityService,  
    private _snackBar: MatSnackBar
  ) {
    this.tempKey = this._route.snapshot.params['tempKey'];
    if (!this.tempKey) {
      this._router.navigate(['/invalid-link']);
      return;
    }
    this._securityService.getUserByTempKey(this.tempKey)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          this._router.navigate(['/invalid-link']);
          return;
        }
      });
    
    this.form = this._fb.group({
      password: ['', [Validators.required]],
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
  }

  ngOnInit(): void {
    this.form.get('password').valueChanges.subscribe(() => {
      this._cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  togglePasswordVisibility(): void {
    if (this.isPasswordVisible) {
      this.passwordInputType = 'password';
      this.isPasswordVisible = false;
      this._cd.markForCheck();
    } else {
      this.passwordInputType = 'text';
      this.isPasswordVisible = true;
      this._cd.markForCheck();
    }
  }
  
  toggleConfirmPasswordVisibility() {
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
    this.hasMinSpecialCharacters = (event.target.value.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g) || []).length >= this.minSpecialCharacters;
  }
  
  submit(): void {
    if (!this.formControls.confirmPassword.value) {
      this.formControls.confirmPassword.markAsTouched();
      this.formControls.confirmPassword.updateValueAndValidity();
      return;
    }
    if (this.formControls.password.value !== this.formControls.confirmPassword.value) {
      this._snackBar.open('The password confirmation does not match.', 'Close', {
        duration: 10000
      });
      return;
    }
    this._securityService.resetPassword(this.tempKey, this.formControls.password.value)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.isPasswordReset = true;
        setTimeout(() => this._router.navigate(['/login']), 5000);
      });
  }
}
