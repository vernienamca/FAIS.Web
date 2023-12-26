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

  //icon on the textbox showing
  icon = faCheck;
  // icon for the lists of green check validation
  greencheck = faCheck;
  imageUrl = 'assets/img/icons/forgot-password-icons/password.png';
  form: FormGroup; 
  inputType = 'password';
  visible = false;
  success = false; 
  resetEmail: string | null = null; 
  tempKey: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private snackbar: MatSnackBar,
  
    private route: ActivatedRoute,
    private _securityService: SecurityService
    
  ) {}




  ngOnInit(): void {
    this.tempKey = this.route.snapshot.params['tempKey'];
    console.log('tempKey:', this.tempKey);

    if (!this.tempKey) {
        console.error('tempKey is undefined or null. Handle this case appropriately.');
   
    }

    this.form = this.fb.group({
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

  
  
send() {
 
  if (this.form.get('password').valid && this.form.get('confirmPassword').valid && this.passwordsMatch()) {
    const newPassword = this.form.get('password').value;

    // Call the ResetPassword method from SecurityService
    this._securityService.resetPassword(newPassword, this.tempKey).subscribe({
      next: data => {

    
        console.log('Password reset successful:', data);
       
      
      },
    });
  } else {
    this.snackbar.open('Password requirements are not satisfied. Please check and try again.', 'Close', {
      duration: 5000,
    });
  }
}

    


passwordsMatch(): boolean {
  const password = this.form.get('password').value;
  const confirmPassword = this.form.get('confirmPassword').value;
  this.success = true;
  setTimeout(() => {
    this.router.navigate(['/login']);
  }, 5000);
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
