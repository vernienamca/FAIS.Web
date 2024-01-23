import { AfterViewInit, Component, ViewChild, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AppVersionComponent } from '../app-version/app-version.component';
import { DialogInterface } from 'src/app/core/models/dialog';
import { DialogComponent } from '../../../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PortalService } from 'src/app/core/services/portal.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ISettings } from 'src/app/core/models/settings';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'vex-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent implements OnInit, AfterViewInit {
  inpMinVal: any;
  inpMaxVal: any;
  inpNumVal;
  hidePass: boolean = true;
  eyeOpen = "visibility";
  eyeClose = "visibility_off";
  isEdit: boolean = false;
  settingsForm: FormGroup;
  settings: ISettings;
  companyName: string;
  phoneNumber: string;
  email: string;
  website: string;
  address: string;
  minPassLength: number;
  minSplChars: number;
  passExpiry: number;
  idleTime: number;
  maxSignAtmp: number;
  enfPassHistory: number;
  smtpServerName: string;
  smtpPort: number;
  smtpFromEmail : string;
  smtpPass: string;
  enableSSL: string;

  @ViewChild(AppVersionComponent) appVersion: AppVersionComponent;

  private _onDestroy$ = new Subject<void>();


  constructor(private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private _portalService: PortalService,
    ) {
    this.settingsForm = this._fb.group({
      id: 1,
      companyName: [''],
      phoneNumber : [''],
      emailAddress: [''],
      website: [''],
      address: [''],
      minPasswordLength: [this.minPassOpt],
      minSpecialCharacters: [this.minSpCharOpt],
      passwordExpiry: [this.passExpOpt],
      idleTime: [this.idleOpt],
      maxSignOnAttempts: [this.signAtmpOpt],
      enforcePasswordHistory: [this.enfPassOpt],
      smtpServerName: [''],
      smtpPort: [''],
      smtpFromEmail: [''],
      smtpPassword: [''],
      smtpEnableSSL: [this.enableSSL],
    });
  }
  ngAfterViewInit() {
    // this.settingsForm.addControl('versionForm', this.appVersion.versionForm);
    // this.appVersion.versionForm.setParent(this.settingsForm);
  }

  ngOnInit(): void {
    this._portalService.getSettingsId(1)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe((data: any) => {
      if (!data) {
        return;
      }
      this.settings = data;

      this.companyName = this.settings.companyName;
      this.phoneNumber = this.settings.phoneNumber;
      this.email = this.settings.emailAddress;
      this.website = this.settings.website;
      this.address = this.settings.address;
      this.minPassLength = this.settings.minPasswordLength;
      this.minSplChars = this.settings.minSpecialCharacters
      this.passExpiry = this.settings.passwordExpiry;
      this.idleTime = this.settings.idleTime;
      this.maxSignAtmp = this.settings.maxSignOnAttempts
      this.enfPassHistory = this.settings.enforcePasswordHistory;
      this.smtpServerName = this.settings.smtpServerName;
      this.smtpPort = this.settings.smtpPort;
      this.smtpFromEmail = this.settings.smtpFromEmail;
      this.smtpPass = this.settings.smtpPassword;
      this.enableSSL = this.settings.smtpEnableSSL;
    });    
  }

  onCheckboxChange(event: MatCheckboxChange) {
    const newValue = event.checked ? 'Y' : 'N';
    this.enableSSL = newValue;
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

  onSubmit() : void{
    console.log('form value',this.settingsForm.value);
    
    this._portalService.updatesettings(this.settingsForm.value)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe({
      next: (data) => {
        console.log('Settings updated successfully:', data);
        this._snackbar.open('Settings updated successfully.', 'Close', {
          duration: 5000,
        });
      },
      error: (error) => {
        console.error('Error updating System Settings:', error);
        this._snackbar.open('Error updating System Settings.', 'Close', {
          duration: 5000,
        });
      }
      }
    );
  }

  save() {
    const dialogInterface: DialogInterface = {
      dialogHeader: 'Save Settings?',
      dialogContent: 'Do you want to save your changes?',
      cancelButtonLabel: 'Cancel',
      confirmButtonLabel: 'Ok',
      callbackMethod: () => {
        this.onSubmit();
      },
    };
     let dlg = this._dialog.open(DialogComponent, {
      width: '350px',
      data: dialogInterface,
      disableClose: true
    });
    dlg.afterClosed().subscribe({
      next: confirmation =>{
        if(confirmation){          
        this._snackbar.open('Update settings successfully.', 'Close', {
          duration: 5000,
        });
      }
      },
      error: error =>{
        this._snackbar.open('Error updating settings.', 'Close', {
          duration: 5000,
        });
      }
    });
  }
}
