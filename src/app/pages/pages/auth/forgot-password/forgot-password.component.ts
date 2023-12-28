import { Component, OnInit,OnDestroy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import {FormGroup,FormBuilder} from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SecurityService } from 'src/app/core/services/security.service';
import {  Subject,takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit {
  icon = faArrowLeft;
  passwordSent = false;
  buttonText = 'SEND RECOVERY LINK';
  imageUrl = 'assets/img/icons/forgot-password-icons/Vector.png';
  
  private _onDestroy$ = new Subject<void>();
  protected aFormGroup: FormGroup;

  form = this.fb.group({
    email: [null, Validators.required]
  });

public getJsonValue: any;
public postJsonValue: any;

  constructor(
    private fb: UntypedFormBuilder,
    private formBuilder: FormBuilder,
    private _securityService: SecurityService,
    private _router: Router
  ) { }

  ngOnInit():void {
this.aFormGroup = this.formBuilder.group({
  recaptcha:['', Validators.required]
})
  } 

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }


  siteKey:string ="6Lfm5R4pAAAAAH8_jyMZ7AVsigdgQWzHiow3Q7a5";

  send(event: Event) {
    event.preventDefault();
    if (this.form.invalid) {
      return;
    }
    this.imageUrl = 'assets/img/icons/forgot-password-icons/reset-password-sent.svg';
    this.passwordSent = true;
    this.sendEmail();
 
}
sendEmail(): void {
  this._securityService.sendEmail(this.form.value.email)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe({
      next: (data) => {
        if (!data) {
          return;
        }    
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }

  redirectToLogin(): void {
    this._router.navigate(['login']);
  }
}
