import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subject, finalize, takeUntil } from 'rxjs';

@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})

export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  inputType = 'password';
  visible = false;
  isLoading = false;

  private _onDestroy$ = new Subject<void>();

  constructor(
    private fb: UntypedFormBuilder,
    private cd: ChangeDetectorRef,
    private _router: Router,
    private _snackbar: MatSnackBar,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  login(): void {
    this.isLoading = true;
    this._authService.authenticate(this.form.value.username, this.form.value.password)
      .pipe(
        takeUntil(this._onDestroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe(data => {
        if (!data) {
          return;
        }
        if (!data.accessToken) {
          this._snackbar.open(data.errorDescription, 'Close', {
            duration: 10000
          });
          return;
        }
        localStorage.setItem('user_id', data.userId);
        localStorage.setItem('access_token', data.accessToken);
        
        this._router.navigate(['/apps/help-center/getting-started']);
      });
  }

  toggleVisibility(): void {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
