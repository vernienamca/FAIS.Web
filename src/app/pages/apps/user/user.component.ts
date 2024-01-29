import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { stagger60ms } from 'src/@vex/animations/stagger.animation';

export interface RolesElement {
  description: string;
  position: string;
  date: Date;
  isToggled: boolean,
}

const ELEMENT_DATA: RolesElement[] = [
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
  selector: 'vex-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    stagger60ms,
    fadeInUp400ms
  ]
})

export class UserComponent {
  form: FormGroup; 
  layoutCtrl = new UntypedFormControl('fullwidth');

  
  color: ThemePalette = 'accent';
  isToggled: boolean = false;
  selectedPhoto: string | null = null;
  positions: string[] = ['Supervisor', 'Manager', 'Employee', 'Other'];
  division: string[] = ['PAD', 'ARMD',];
  status: string[] = ['Active', 'Inactive',];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  searchCtrl: FormControl = new FormControl();
  

  handleToggle(element: RolesElement) {
    element.isToggled = !element.isToggled;
  }
  
  
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.getBase64(file).then((dataUrl: string) => {
        this.selectedPhoto = dataUrl;
      });
    }
  }

  getBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }


  get formControls() {
    return {
      oldPassword: this.form.get('oldPassword')
    };
  }


  constructor(
    private _fb: FormBuilder
  ) {
    this.form = this._fb.group({
      oldPassword: ['', [Validators.required]]
    });
  }


  save(){

  }

}
