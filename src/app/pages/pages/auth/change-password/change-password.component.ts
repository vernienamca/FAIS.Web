import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

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

  get oldPass() {
    return this.changePasswordForm.get('oldPass');
  } 
  get newPass() {
    return this.changePasswordForm.get('newPass');
  } 
  get confPass() {
    return this.changePasswordForm.get('confPass');
  } 

  constructor(private fb: FormBuilder) {}

  regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W.*\W).{8,}$/;

  ngOnInit(){
    this.changePasswordForm = this.fb.group({
      userId: [1],
      oldPass: ['', Validators.required],
      newPass: ['', Validators.required],
      confPass: ['', Validators.required],
  });
  }

onSubmit() : void{
  console.log('form value',this.changePasswordForm.value);
}

}
