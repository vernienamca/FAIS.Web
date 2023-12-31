import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { UserService } from 'src/app/core/services/user.service';



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
  selector: 'vex-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],

  
})

export class UserAddComponent {

  color: ThemePalette = 'accent';
  isToggled: boolean = false;
  selectedPhoto: string | null = null;
  positions: string[] = [];
  division: string[] = [];
  status: string[] = ['Active', 'Inactive',];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  searchCtrl: FormControl = new FormControl();

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService, ) {}



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

  ngOnInit(): void {
    this._userService.getLibraryNamesByCode('PST').subscribe(
      (positionData) => {
        console.log('Position Data:', positionData);
        if (positionData) {
          this.positions = positionData; 
        }
      }
    );
  
    this._userService.getLibraryNamesByCode('DIV').subscribe(
      (divisionData) => {
        console.log('Division Data:', divisionData);
        if (divisionData) {
          this.division = divisionData; 
        }
      }
    );
  }
 
// TODO: CLEAN THIS VARIABLES MAKE IT SIMPLE DECLARE IT ONCE 
//REMOVE ERROR AND
  settingsForm = this._fb.group({
    ExampleData: '', 
    accountstatus:'',
    statusdate:'',
    accexpiration:'',
    emailaddress:'',
    username: '', 
    position:'',
    TAFG:'',
    division:'',
    last:'',
    mobilenumber: '',
    First:'',
    OUPFG: '',
   
  });

  save() {
    console.log('form value', this.settingsForm.value);
    const defaultPassword = 'changeme';
    console.log('TAFG value:', this.settingsForm.value.TAFG);
    console.log('TAFG value:', this.settingsForm.value.OUPFG);

    const userDTO = {
      EmployeeNumber: this.settingsForm.value.ExampleData,
      statusCode: '1',
      statusDate: this.settingsForm.value.statusdate,
      dateExpired: this.settingsForm.value.accexpiration,
      emailAddress: this.settingsForm.value.emailaddress,
      userName: this.settingsForm.value.username,
      positionName: this.settingsForm.value.position,
      divisionName: this.settingsForm.value.division,
      mobileNumber: this.settingsForm.value.mobilenumber,
      TAFG: this.settingsForm.value.TAFG,
      firstName: this.settingsForm.value.First,
      lastName: this.settingsForm.value.last,
      password: defaultPassword,
      createdBy: 1, 
      updatedBy: 1, 
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      photo: this.selectedPhoto,
      OupFgId: this.settingsForm.value.OUPFG,
      sessionId: null
    };
  
    console.log('userDTO:', userDTO);
  
    this._userService.addUser(userDTO).subscribe(
      (addedUser) => {
        console.log('User added successfully:', addedUser);
        this.settingsForm.reset();
      },
      (error) => {
        console.error('Error adding user:', error);
    
        if (error.error) {
          console.error('Error details:', error.error);
        } else {
          console.error('No additional error details.');
        }
      }
    );
    } 
  
  }

