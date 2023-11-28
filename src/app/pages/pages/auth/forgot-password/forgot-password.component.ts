import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import {FormGroup,FormBuilder} from '@angular/forms';
//left arrow 
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';



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

  constructor(
    private router: Router,
    private fb: UntypedFormBuilder,
    private formBuilder: FormBuilder
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
    //prevent from redirecting when send is clicked 
    event.preventDefault();


    // this.router.navigate(['/']);
    this.imageUrl = 'assets/img/icons/forgot-password-icons/reset-password-sent.png';


    this.passwordSent = true;
  }
}
