import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';
import {ThemePalette} from '@angular/material/core';

export interface PeriodicElement {
  description: string;
  position: string;
  date: Date;
  isToggled: boolean,
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 'Admin', description: 'Description Accountant...', date: new Date('2023-07-18T14:00:00'), isToggled: false },

  {position: 'PAD Analyst', description: 'Description Librarian...',  date: new Date('2023-07-18T14:00:00'), isToggled: false },
  {position: 'PAD Verifier', description: 'Description Super Admin',  date: new Date('2023-07-18T14:00:00'),  isToggled: false },
  {position: 'PAD Approver', description: 'Description Accountant', date: new Date('2023-07-18T14:00:00'), isToggled: false },
  {position: 'ARMD Analyst', description: 'Description Accountant',  date: new Date('2023-07-18T14:00:00'),  isToggled: false },
  {position: 'ARMD Verifier', description: 'Description Librarian...',  date: new Date('2023-07-18T14:00:00'),  isToggled: false },
  {position: 'ARMD Approver', description: 'Description Super Admin',  date: new Date('2023-07-18T14:00:00'), isToggled: false },
  {position: 'Viewer', description: 'Description Accountant',  date: new Date('2023-07-18T14:00:00'),  isToggled: false },
  {position: 'PAD Librarian', description: 'Description Librarian..',  date: new Date('2023-07-18T14:00:00'),  isToggled: false },
  {position: 'ARMD Librarian', description: 'Description Super Admin...',  date: new Date('2023-07-18T14:00:00'),  isToggled: false },

];

@Component({
  selector: 'vex-user-edit',
  templateUrl: './User-Edit.component.html',
  styleUrls: ['./User-Edit.component.scss'],

  
})
export class UserEditComponent {

  color: ThemePalette = 'accent';
  
  isToggled: boolean = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  searchCtrl: FormControl = new FormControl();
  
  handleToggle(element: PeriodicElement) {
    element.isToggled = !element.isToggled;
  }
  
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    // Handle the selected file, you can upload it to a server, display a preview, etc.
    console.log('Selected file:', file);
  }

  constructor(private fb: FormBuilder) {}


  
  // minPassOpt = [
  //   {id: 1, value: 8},
  //   {id: 2, value: 10}
  // ];

  // minSpCharOpt = [
  //   {id: 1, value: 1},
  //   {id: 2, value: 2}
  // ];

  // passExpOpt = [
  //   {id: 1, value: 160},
  //   {id: 2, value: 180}
  // ];

  // idleOpt = [
  //   {id: 1, value: 15},
  //   {id: 2, value: 20}
  // ];

  // signAtmpOpt = [
  //   {id: 1, value: 3},
  //   {id: 2, value: 5}
  // ];

  // enfPassOpt = [
  //   {id: 1, value: 3},
  //   {id: 2, value: 5}
  // ];

  // inpOpts = [
  //   this.minPassOpt,
  //   this.minSpCharOpt,
  //   this.passExpOpt,
  //   this.idleOpt,
  //   this.signAtmpOpt,
  //   this.enfPassOpt
  // ];

  settingsForm = this.fb.group({
    company: '',
    phone: '',
    email: '',
    web: '',
    address: '',
    // minPass: this.minPassOpt,
    // minSpChar: this.minSpCharOpt,
    // passExp: this.passExpOpt,
    // idle: this.idleOpt,
    // signAtmp: this.signAtmpOpt,
    // enfPass: this.enfPassOpt
  });

  save(){
    console.log('form value',this.settingsForm.value);
    
  }

}
