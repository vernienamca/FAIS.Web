import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SecurityService } from 'src/app/core/services/security.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'vex-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']

})

export class ChangePasswordComponent {
  eyeOpen = "visibility";
  eyeClose = "visibility_off";

  hideOldPass = true;
  hideNewPass = true;
  hideConfPass = true;

  changePasswordForm: FormGroup;
  errorMessage:string;

  private _onDestroy$ = new Subject<void>();

  get oldPass() {
    return this.changePasswordForm.get('oldPass');
  } 
  get newPass() {
    return this.changePasswordForm.get('newPass');
  } 
  get confPass() {
    return this.changePasswordForm.get('confPass');
  } 

  constructor(private _fb: FormBuilder,
    private _securityService: SecurityService,
    private _snackbar: MatSnackBar,
    ) {}

  regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W.*\W).{8,}$/;

  ngOnInit(){
    this.changePasswordForm = this._fb.group({
      oldPass: ['', Validators.required],
      newPass: ['', Validators.required],
      confPass: ['', Validators.required],
  });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

onSubmit() : void{
  if (this.changePasswordForm.get('oldPass').valid && this.changePasswordForm.get('newPass').valid && this.passwordsMatch()) {
    const oldPassword = this.changePasswordForm.get('oldPass').value;
    const newPassword = this.changePasswordForm.get('newPass').value;
    this._securityService.changePassword(oldPassword,newPassword)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe({
      next: (data) => {
        console.log('Password change successfully:', data);
        this._snackbar.open('Password change successfully.', 'Close', {
          duration: 5000,
        });
        this.changePasswordForm.reset();
      },
      error: (error) => {
        console.error('Error sending email:', error);
        this._snackbar.open('Old Password is incorrect.', 'Close', {
          duration: 5000,
        });
      }
    });
  } else {
    this._snackbar.open('Old Password and New Password mismatched. Please check and try again.', 'Close', {
      duration: 5000,
    });
  }
}

passwordsMatch(): boolean {
  const newPass = this.changePasswordForm.get('newPass').value;
  const confPass = this.changePasswordForm.get('confPass').value;
  return newPass === confPass;
}

}
