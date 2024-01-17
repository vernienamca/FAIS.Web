import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { faCheck } from '@fortawesome/free-solid-svg-icons';



import { ActivatedRoute } from '@angular/router';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'vex-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']

})
export class ResetPasswordComponent implements OnInit {

  icon = faCheck;
  greencheck = faCheck;
  imageUrl = 'assets/img/icons/forgot-password-icons/password.png';
  form: FormGroup; 
  passwordInputType = 'password';
  confirmPasswordInputType = 'password';
  isPasswordVisible = false;
  isConfirmPasswordVisible = false;
  success = false; 
  resetEmail: string | null = null; 
  tempKey: string;

  get formControls() {
    return {
      password: this.form.get('password'),
      confirmPassword: this.form.get('confirmPassword')
    };
  }

  constructor(
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _route: ActivatedRoute    
  ) {
    this.tempKey = this._route.snapshot.params['tempKey'];
    if (!this.tempKey) {
      return;
    }
    this.form = this._fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
    this.form.get('password').valueChanges.subscribe(() => {
        this._cd.markForCheck();
    });
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
  
  submit(): void {

  }

  
// send() {
 
//   if (this.form.get('password').valid && this.form.get('confirmPassword').valid && this.passwordsMatch()) {
//     const newPassword = this.form.get('password').value;
//     this._securityService.resetPassword(newPassword, this.tempKey).subscribe({
//       next: data => {

    
//         console.log('Password reset successful:', data);
       
      
//       },
//     });
//   } else {
//     this._snackbar.open('Password requirements are not satisfied. Please check and try again.', 'Close', {
//       duration: 5000,
//     });
//   }
// }


// passwordsMatch(): boolean {
//   const password = this.form.get('password').value;
//   const confirmPassword = this.form.get('confirmPassword').value;
//   this.success = true;
//   setTimeout(() => {
//     this._router.navigate(['/login']);
//   }, 5000);
//   return password === confirmPassword;
// }

// passwordRequirements(): { minLength: boolean, hasNumber: boolean, hasLowercase: boolean, hasSpecialCharacter: boolean } {
//   const password = this.form.get('password').value;
//   const specialCharacterCount = (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;

//   return {
//     minLength: password.length >= 8,
//     hasNumber: /\d/.test(password),
//     hasLowercase: /[a-z]/.test(password),
//     hasSpecialCharacter: specialCharacterCount >= 2
//   };
// }


}
