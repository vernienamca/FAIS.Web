import { Component } from '@angular/core';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'vex-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']

})

export class ChangePasswordComponent {
  folderSave = faFolder;
  close = faClose;
  eyeOpen = faEye;
  eyeClose = faEyeSlash;

  hideOldPass = false;
  hideNewPass = false;
  hideConfPass = false;

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
      oldPass: ['', Validators.required],
      newPass: ['', Validators.required],
      confPass: ['', Validators.required],
  });
  }

onSubmit() : void{
  console.log('form value',this.changePasswordForm.value);
}

}
