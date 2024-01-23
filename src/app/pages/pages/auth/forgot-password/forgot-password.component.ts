import { Component, OnInit,OnDestroy } from '@angular/core';
import { Validators } from '@angular/forms';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { FormGroup,FormBuilder } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SecurityService } from 'src/app/core/services/security.service';
import {  Subject,takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isPasswordSent = false;
  siteKey: string;
  arrowIcon = faArrowLeft;

  get formControls() {
    return {
      email: this.form.get('email'),
      recaptcha: this.form.get('recaptcha')
    };
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    _fb: FormBuilder,
    private _router: Router,
    private _securityService: SecurityService,
    private _snackBar: MatSnackBar
  ) { 
    this.form = _fb.group({
      email: ['', [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      recaptcha: ['', Validators.required]
    });
    this.siteKey = environment.reCaptcha.siteKey;
  }

  ngOnInit(): void {
  } 

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  submit(): void {
    this._securityService.forgotPassword(this.formControls.email.value)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data.id) {
          this._snackBar.open(`We couldn't find an account with that email adress. Please check and try again.`, 'Close', {
            duration: 10000
          });
          return;
        }
        this.isPasswordSent = true;
      });
  }

  redirectToLogin(): void {
    this._router.navigate(['login']);
  }
}
