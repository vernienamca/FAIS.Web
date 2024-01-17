import { Component, OnInit,OnDestroy } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import {FormGroup,FormBuilder} from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SecurityService } from 'src/app/core/services/security.service';
import {  Subject,takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'vex-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [fadeInUp400ms]
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  form: FormGroup;
  siteKey: string;

  get formControls() {
    return {
      email: this.form.get('email'),
      recaptcha: this.form.get('recaptcha')
    };
  }

  icon = faArrowLeft;
  passwordSent = false;
  buttonText = 'SEND RECOVERY LINK';
  imageUrl = 'assets/img/icons/forgot-password-icons/Vector.png';
  
  private _onDestroy$ = new Subject<void>();

  constructor(
    fb: FormBuilder,
    private _securityService: SecurityService,
    private _router: Router
  ) { 
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      recaptcha: ['', Validators.required]
    });
    this.siteKey = environment.reCaptcha.siteKey;
  }

  ngOnInit():void {
  } 

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  submit(): void {
    this._securityService.forgotPassword(this.formControls.email.value)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        console.log(data);
      });
  }

  // send(event: Event) {
  //   event.preventDefault();
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   this.imageUrl = 'assets/img/icons/forgot-password-icons/reset-password-sent.svg';
  //   this.passwordSent = true;
  //   this.sendEmail();
  // }

  // sendEmail(): void {
  //   this._securityService.sendEmail(this.form.value.email)
  //     .pipe(takeUntil(this._onDestroy$))
  //     .subscribe({
  //       next: (data) => {
  //         if (!data) {
  //           return;
  //         }    
  //       },
  //       error: (error) => {
  //         console.error('Error sending email:', error);
  //       }
  //     });
  //   }

  redirectToLogin(): void {
    this._router.navigate(['login']);
  }
}
