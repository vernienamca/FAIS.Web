import { ChangeDetectorRef, Component, Inject, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Subject, takeUntil } from "rxjs";
import { SecurityService } from "src/app/core/services/security.service";

@Component({
  selector: 'app-reset-password-dialog',
  templateUrl: './reset-password-dialog.component.html',
  styleUrls: ['./reset-password-dialog.component.scss']
})
export class ResetPasswordDialogComponent implements OnDestroy {
  form: FormGroup; 
  userId: number;
  inputType = 'password';
  visible = false;

  get formControls() {
    return {
      username: this.form.get('username'),
      fullName: this.form.get('fullName'),
      password: this.form.get('password')
    };
  }

  private _onDestroy$ = new Subject<void>();

  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private _data: any,
    private cd: ChangeDetectorRef,
    private _securityService: SecurityService,
    private _snackBar: MatSnackBar
  ) { 
    this.userId = parseInt(this._data.id);
    this.form = this._fb.group({
      username: [this._data.userName, []],
      fullName: [`${this._data.firstName} ${this._data.lastName}`, []],
      password: ['', [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  generatePassword(): void {
    this._securityService.getGeneratedPassword()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      this.formControls.password.setValue(data);
    });
  }

  resetPassword(): void {
    this._securityService.resetFromGeneratedPassword(this.userId, this.formControls.password.value)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        let snackBarRef = this._snackBar.open('Password has been successfully reset.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
        });
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

