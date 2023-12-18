import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import {FormGroup,FormBuilder} from '@angular/forms';
//left arrow 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';


import { catchError } from 'rxjs/operators';

// //temp db service
// import { TempDbService } from 'src/services/temp-db.service'; // Import your TempDbService

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit {



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
    // private http: HttpClient,
//temp db injection
    // private tempDbService: TempDbService 
  ) { }

  ngOnInit() {

    //captcha
this.aFormGroup = this.formBuilder.group({
  recaptcha:['', Validators.required]
})

  } 
  
//captcha site key make sure to change this according to your domain (I used Localhost login on transco gmail)

  siteKey:string ="6Lfm5R4pAAAAAH8_jyMZ7AVsigdgQWzHiow3Q7a5";

  send(event: Event) {
  
    event.preventDefault();
  
    // If the form is invalid, do not proceed with the API request
    if (this.form.invalid) {
      return;
    }
  
  
    const email = this.form.get('email').value;

 // Check if the email exists in the JSON data
//  const user = this.tempDbService.getUserByEmail(email);
//  if (!user) {
//   console.error('Email not found in the database');
//   return;
//  }



  //  // API ENDPOINT
  //  const apiUrl = 'https://localhost:7194/api/Email/send-email';
  //   const emailData = { to: email };
  
  //   console.log('Email to send:', emailData);
  
  //   // http request
  //   this.http
  //     .post(apiUrl, emailData)
  //     .pipe(
  //       catchError((error) => {
  //         console.error('Error sending email:', error);
        
  //         return [];
  //       })
  //     )
  //     .subscribe(() => {
        
        this.imageUrl = 'assets/img/icons/forgot-password-icons/reset-password-sent.svg';
        this.passwordSent = true;
      // });
  }
}
