import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vex-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  //icon on the textbox showing
  icon = faCheck;
  // icon for the lists of green check validation
  greencheck = faCheck;
  
  imageUrl = 'assets/img/icons/forgot-password-icons/password.png';
  form: FormGroup; 
  

  inputType = 'password';
  visible = false;

  success = false; 
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar
  ) {}



  send() {
    if (this.passwordRequirements && this.passwordsMatch()) {
      this.success = true;
    } else {
      // Show an error message to the user
      this.snackbar.open('Password requirements are not satisfied. Please check and try again.', 'Close', {
        duration: 5000,
      });
    }
  }
  
  

 ngOnInit() {
  this.form = this.fb.group({
    email: ['', Validators.required],
    password: [
      '',
      [Validators.required, Validators.minLength(8)],
    ],
    confirmPassword: [
      '',
      [Validators.required, Validators.minLength(8)],
    ]

  });

  // Listen for changes in the password field
  this.form.get('password').valueChanges.subscribe(() => {
    this.cd.markForCheck(); // Trigger change detection
  });
}
  

passwordsMatch(): boolean {
  const password = this.form.get('password').value;
  const confirmPassword = this.form.get('confirmPassword').value;

  return password === confirmPassword;
}


// password requirements logic call the returned values on the html
passwordRequirements(): { minLength: boolean, hasNumber: boolean, hasLowercase: boolean, hasSpecialCharacter: boolean } {
  const password = this.form.get('password').value;

  // Count the number of special characters in the password
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
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
