import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { UserService } from 'src/app/core/services/user.service';
import { RoleService } from 'src/app/core/services/role.service';
import { DatePipe } from '@angular/common';

export interface RolesElement {
  description: string;
  position: string;
  date: string;
  isToggled: boolean,
}



@Component({
  selector: 'vex-user-add',
  templateUrl: './User-Add.component.html',
  styleUrls: ['./User-Add.component.scss'],

})

export class UserAddComponent {

  color: ThemePalette = 'accent';
  isToggled: boolean = false;
  selectedPhoto: string | null = null;
  positions: string[] = [];
  division: string[] = [];
  status: string[] = ['Active', 'Inactive',];
  dataSource: RolesElement[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  searchCtrl: FormControl = new FormControl();
  USER_ROLE: RolesElement[] = [];
  lastUserId: number | null =null

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _roleService: RoleService,
    private _datePipe: DatePipe
) {}



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
        if (positionData) {
          this.positions = positionData; 
        }
      }
    );
  
    this._userService.getLibraryNamesByCode('DIV').subscribe(
      (divisionData) => {
        if (divisionData) {
          this.division = divisionData; 
        }
      }
    );
  

  }
    
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
    const defaultPassword = 'changeme';
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
  

    this._userService.addUser(userDTO).subscribe(
      (addedUser) => {
        console.log('User added successfully:', addedUser);
      }
    );

    this._userService.getLastUserId().subscribe(
      (lastUserId) => {
        this.lastUserId = lastUserId;
        console.log('newIdadded:',this.lastUserId);
        if (this.lastUserId !== null && this.lastUserId !== undefined) {
          this._roleService.getById(+this.lastUserId).subscribe(
            (roleInfo: any) => {
              this.USER_ROLE = [{
                position: roleInfo.name,
                description: roleInfo.description,
                date: this._datePipe.transform(roleInfo.createdAt,'yyyy-MM-dd'),
                isToggled: true,
              }];
            }
          ); 
        }
      }
    );
  }
}
    
