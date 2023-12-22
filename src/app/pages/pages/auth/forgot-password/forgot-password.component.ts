import { Component, OnInit,OnDestroy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import {FormGroup,FormBuilder} from '@angular/forms';
//left arrow 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SecurityService } from 'src/app/core/services/security.service';

import {  Subject,takeUntil } from 'rxjs';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit {

  private _onDestroy$ = new Subject<void>();

//captcha form group
protected aFormGroup: FormGroup;


//left arrow 
icon = faArrowLeft;
passwordSent = false;
buttonText = 'SEND RECOVERY LINK';

//Image URLS 
imageUrl = 'assets/img/icons/forgot-password-icons/Vector.png';


  form = this.fb.group({
    email: [null, Validators.required]
  });

public getJsonValue: any;
public postJsonValue: any;

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private formBuilder: FormBuilder,
    private _securityService: SecurityService,
  

  ) { }

  ngOnInit():void {

    //captcha
this.aFormGroup = this.formBuilder.group({
  recaptcha:['', Validators.required]

})



  } 

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  

  
//captcha site key make sure to change this according to your domain (I used Localhost login on transco gmail)

  siteKey:string ="6Lfm5R4pAAAAAH8_jyMZ7AVsigdgQWzHiow3Q7a5";

  send(event: Event) {
  
    event.preventDefault();
  
    // If the form is invalid, do not proceed with the API request
    if (this.form.invalid) {
      return;
    }
    this.imageUrl = 'assets/img/icons/forgot-password-icons/reset-password-sent.svg';
    this.passwordSent = true;
    this.sendEmail();
 
}

sendEmail() {
  this._securityService.sendEmail(this.form.value.email)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe({
      next: (data) => {
        if (!data) {
          return;
        }
        // Check additional conditions based on the response, if needed

        // Handle success, e.g., update UI, show a success message, etc.
     

    
      },
      error: (error) => {
        // Handle error, e.g., show an error message, log the error, etc.
        console.error('Error sending email:', error);
      }
    });
}
}
