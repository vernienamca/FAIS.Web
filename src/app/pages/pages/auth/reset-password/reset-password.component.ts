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
  inputType = 'password';
  visible = false;
  success = false; 
  resetEmail: string | null = null; 
  tempKey: string;

  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _cd: ChangeDetectorRef,
    private _snackbar: MatSnackBar,
  
    private _route: ActivatedRoute,
    private _securityService: SecurityService
    
  ) {}


  ngOnInit(): void {
    this.tempKey = this._route.snapshot.params['tempKey'];
    console.log('tempKey:', this.tempKey);

    if (!this.tempKey) {
        console.error('tempKey is undefined or null. Handle this case appropriately.');
   
    }

    this.form = this._fb.group({
        password: [
            '',
            [Validators.required, Validators.minLength(8)],
        ],
        confirmPassword: [
            '',
            [Validators.required, Validators.minLength(8)],
        ]
    });
    this.form.get('password').valueChanges.subscribe(() => {
        this._cd.markForCheck();
    });
}

  
  
send() {
 
  if (this.form.get('password').valid && this.form.get('confirmPassword').valid && this.passwordsMatch()) {
    const newPassword = this.form.get('password').value;
    this._securityService.resetPassword(newPassword, this.tempKey).subscribe({
      next: data => {

    
        console.log('Password reset successful:', data);
       
      
      },
    });
  } else {
    this._snackbar.open('Password requirements are not satisfied. Please check and try again.', 'Close', {
      duration: 5000,
    });
  }
}


passwordsMatch(): boolean {
  const password = this.form.get('password').value;
  const confirmPassword = this.form.get('confirmPassword').value;
  this.success = true;
  setTimeout(() => {
    this._router.navigate(['/login']);
  }, 5000);
  return password === confirmPassword;
}

passwordRequirements(): { minLength: boolean, hasNumber: boolean, hasLowercase: boolean, hasSpecialCharacter: boolean } {
  const password = this.form.get('password').value;
  const specialCharacterCount = (password.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;

  return {
    minLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasSpecialCharacter: specialCharacterCount >= 2
  };
}

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this._cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this._cd.markForCheck();
    }
  }
}
