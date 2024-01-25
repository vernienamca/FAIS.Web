import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormControl, Validators } from '@angular/forms';
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
@Component({
  selector: 'vex-system-settings',
  templateUrl: './system-settings.component.html',
  styleUrls: ['./system-settings.component.scss']
})
export class SystemSettingsComponent implements OnInit, AfterViewInit {
  layoutCtrl = new UntypedFormControl('fullwidth');
  regex = /^[0-9]+$/;
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
  checkSSL: boolean;
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
      minPasswordLength: [''],
      minSpecialCharacters: [''],
      passwordExpiry: [''],
      idleTime: [''],
      maxSignOnAttempts: [''],
      enforcePasswordHistory: [this.enfPassOpt,Validators.required],
      smtpServerName: [''],
      smtpPort: [''],
      smtpFromEmail: [''],
      smtpPassword: [''],
      smtpEnableSSL: [''],
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
      this.checkSSL = this.enableSSL ==='Y';
      this.convertBooleanToString(this.checkSSL, this.enableSSL);
    });    
  }

  convertBooleanToString(bool: boolean, newValue:string): void {
    if (bool === true) {
      this.settingsForm.get('smtpEnableSSL').patchValue(newValue);
    }
  }

  enfPassOpt = [
    {id: 1, value: 3},
    {id: 2, value: 5},
    {id: 3, value: 10}
  ];

  onSubmit() : void{    
    const ssl = this.settingsForm.get('smtpEnableSSL');
    if (ssl.value === false) {
      ssl.patchValue('N');
      this.checkSSL = ssl.value !== 'N';
    }

    this._portalService.updatesettings(this.settingsForm.value)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe({
      next: (data) => {        
        ssl.value === 'N' ? ssl.patchValue(false) : ssl.patchValue('Y');
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
        return;
      }
      },
      error: error =>{
        if (error) {
          return;
        }
      }
    });
  }
}
