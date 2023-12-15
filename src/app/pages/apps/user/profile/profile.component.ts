import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  inpMinVal: any;
  inpMaxVal: any;
  inpNumVal;

  constructor(private fb: FormBuilder)
   {
    console.log('ProfileComponent constructor called');
  
  }

  minPassOpt = [
    {id: 1, value: 8},
    {id: 2, value: 10}
  ];

  minSpCharOpt = [
    {id: 1, value: 1},
    {id: 2, value: 2}
  ];

  passExpOpt = [
    {id: 1, value: 160},
    {id: 2, value: 180}
  ];

  idleOpt = [
    {id: 1, value: 15},
    {id: 2, value: 20}
  ];

  signAtmpOpt = [
    {id: 1, value: 3},
    {id: 2, value: 5}
  ];

  enfPassOpt = [
    {id: 1, value: 3},
    {id: 2, value: 5}
  ];

  inpOpts = [
    this.minPassOpt,
    this.minSpCharOpt,
    this.passExpOpt,
    this.idleOpt,
    this.signAtmpOpt,
    this.enfPassOpt
  ];

  settingsForm = this.fb.group({
    company: '',
    phone: '',
    email: '',
    web: '',
    address: '',
    minPass: this.minPassOpt,
    minSpChar: this.minSpCharOpt,
    passExp: this.passExpOpt,
    idle: this.idleOpt,
    signAtmp: this.signAtmpOpt,
    enfPass: this.enfPassOpt
  });

  save(){
    console.log('form value',this.settingsForm.value);
    
  }

}
