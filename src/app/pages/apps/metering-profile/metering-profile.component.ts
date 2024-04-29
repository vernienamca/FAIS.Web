import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute,Router } from '@angular/router';
import { Subject, takeUntil, tap , Observable, switchMap } from 'rxjs';
import { IChart } from 'src/app/core/models/chart';
import { PortalService } from 'src/app/core/services/portal.service';
import { IMeteringProfile } from 'src/app/core/models/metering-profile';
import { SecurityService } from 'src/app/core/services/security.service';
import {IRole} from 'src/app/core/models/role'
import { RoleNames } from 'src/app/core/enums/role.enums';
import { MatDialog } from '@angular/material/dialog';
import { MeteringConfirmationDialogComponent } from './metering-confirmation-dialog/metering-confirmation-dialog.component';
import { ModuleEnum } from 'src/app/core/enums/module-enum';

@Component({
  selector: 'vex-module',
  templateUrl: './metering-profile.component.html',
  styleUrls: ['./metering-profile.component.scss'],
})

export class MeteringProfileComponent implements OnInit, OnDestroy {
 id: number;
 userId: number;
 isEditMode: boolean = false;
 layoutCtrl = new UntypedFormControl('fullwidth');
 form: FormGroup;
 statusDate: Date | null = null;
 statusLabel = 'Active';
 chartofAccounts: IChart[] = [];
 installationType: any [] = [];
 districtOffice: any [] = [];
 meteringClassification: any [] = [];
 transmissionGrid: any[] = [];
 facilityLocation: any[] = [];
 createdBy: string;
 createdAt: Date;
 updatedBy: string;
 updatedAt: Date;
 roleIds: number[] = [];
 roles: IRole[] = [];
 isAdmin: boolean = false;
 isSaving: boolean;

 get formControls() {
  return {
    meteringPointName: this.form.get('meteringPointName'),
    customer: this.form.get('customer'),
    installationType: this.form.get('installationType'),
    meteringClass: this.form.get('meteringClass'),
    transGrid: this.form.get('transGrid'),
    districtOffice: this.form.get('districtOffice'),
    facilityLocation: this.form.get('facilityLocation'),
    lineSegment: this.form.get('lineSegment'),
    remarks: this.form.get('remarks'),
    isActive: this.form.get('isActive'),
    udf1: this.form.get('udf1'), 
    udf2: this.form.get('udf2'),
    udf3: this.form.get('udf3'),
    region: this.form.get('region'),
    municipality: this.form.get('municipality'),
    province: this.form.get('province'),
    brgy: this.form.get('brgy')
  };
}

  private _onDestroy$ = new Subject<void>();

  constructor(
   private _fb: FormBuilder,
   private _route:ActivatedRoute,
   private _portalService: PortalService,
   private _securityService: SecurityService,
   private _snackBar: MatSnackBar,
   private _router: Router,
   private _dialog: MatDialog
  ) {
  this.form = this._fb.group({
    meteringPointName: ['', Validators.required], 
    customer: ['', Validators.required],
    installationTypeSeq: ['',Validators.required],
    meteringClass: ['',Validators.required],
    transGrid: ['',Validators.required],
    districtSeq: ['',Validators.required],
    facilityLocationSeq: ['',Validators.required],
    lineSegment: [''],
    remarks: [''], 
    isActive: ['Y', []],
    udf1: [''], 
    udf2: [''],
    udf3: [''], 
    adRegionSeq: [''], 
    adMunSeq: [''], 
    adProvSeq: [''], 
    adBrgySeq: [''] 
    });
    // read user story to check the limitations of roles
    // to refactor this you just need to add read on roles and disable fields...
    // just don't forget to add your scripts...
    //
    //TODO :  ASK MA'AM NICOLE ABOUT THE DROPDOWN ON THE ADDRESS..
    //ADD UDF1 UDF2 UDF3 on the metering profile.
    this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      const permission = data.filter(a => a.moduleId === ModuleEnum.AddorEditMeteringProfile);
      if (!permission || permission.some(s => s.isRead) === false) {
        this._router.navigate([`pages/error-401`]);
      }
    });
  }

  ngOnInit(): void { 
  this.userId = parseInt(localStorage.getItem('user_id'));
  this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    
  this._getRoles().pipe(
    tap(() => this._checkFormFields()),  
    switchMap(() => this._portalService.getChartAccounts()),
    takeUntil(this._onDestroy$)
  ).subscribe(chartAccounts => {
    this.chartofAccounts = chartAccounts;
  })

    this._portalService.getLibraryTypes()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data) {
        return;
      }
      this.installationType = data.filter(type => type.code =='INT');
      this.meteringClassification = data.filter(type => type.code =='MTC');
      this.transmissionGrid = data.filter(type => type.code === 'TRG');
      this.districtOffice = data.filter(type => type.code === 'DTO');
      this.facilityLocation = data.filter(type => type.code == 'FCL');
    })

    if(this.id){
      this.isEditMode = true;
      this._getMeteringProfile(this.id);
    }
    };

   save(): void{
    this.isSaving = true;
    this._dialog.open(MeteringConfirmationDialogComponent,{
    width: '500px',
    disableClose: true
    })
    .afterClosed().subscribe((result: boolean) => {
      if (result)
        if(this.isEditMode)
          {
           editdata.id = parseInt(this._route.snapshot.paramMap.get('id'));
           editdata.createdBy = data.createdBy;
           console.log(editdata)
           this._updateMetering(editdata)
          }
          else {
            this._addMetering(data);
          }
          else {
            this._snackBar.open('User Cancelled saving.', 'Close');
            this.isSaving = false;  
          }
    })
    const data = Object.assign({},this.form.value)
    const editdata = Object.assign({}, this.form.getRawValue())
    data.createdBy = parseInt(localStorage.getItem('user_id'));
    data.isActive = data.isActive ? 'Y' : 'N';
    editdata.isActive = editdata.isActive ? 'Y' : 'N';
    editdata.updatedBy = this.userId;
   }

  ngOnDestroy(): void {``
    this._onDestroy$.next();
    this._onDestroy$.complete();  
  }

  close(): void{
    this._router.navigateByUrl('apps/metering-profile');
  }

  private _checkFormFields(): void {
    this._portalService.getUserRoles(this.userId)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      const roleAuthorized = this._getRoleAuthorization(data)
      if (roleAuthorized.name === 'Administrator') {
       this.isAdmin = true;
       const administratorRole = this.roles.find(role => role.name === 'Administrator');
       this.roleIds.push(administratorRole.id)
      }
      else {
        this._disableFormFields(roleAuthorized);
      }
    });
}
  
  private _addMetering(data: IMeteringProfile): void {
    data.statusDate = new Date();
    this._portalService.addMeteringProfile(data)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      this.id = data.id;
      const notifData = {
        roleIds: this.roleIds, 
        id: this.id,
        meteringPointName: data.meteringPointName,
        editMode: this.isEditMode,
        isAdmin: this.isAdmin
      };
      this._securityService.postNotifRole(notifData)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
      })

      this._snackBar.open('Metering profile has been successfully saved.', 'Close');
      setTimeout(() => {
        this._router.navigate([`apps/metering-profile/${data.id}`]); 
      }, 2000);
  });
}

  private _updateMetering(data: IMeteringProfile): void{
    data.statusDate = new Date();
    this._portalService.updateMeteringProfile(data)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
      }
        this.id = data.result.id;
        const notifData = {
        roleIds: this.roleIds, 
        id: this.id,
        assetName: data.result.name,
        editMode: this.isEditMode,
        isAdmin: this.isAdmin
      };
    this._securityService.postNotifRole(notifData)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
      })
        let snackBarRef = this._snackBar.open('Metering profile has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
        window.location.reload();
    });
    })
  }

   private _getMeteringProfile(id: number): void{
      this._portalService.getMeteringProfile(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
        this._initializeData(data)
      })
  }

  private _initializeData(data: any): void {
    const meteringData = data
    console.log(meteringData)
    this.form.patchValue({
      meteringPointName: meteringData.meteringPointName,
      customer: meteringData.customer,
      installationTypeSeq : meteringData.installationTypeSeq,
      meteringClass : meteringData.meteringClass,
      transGrid: meteringData.transGrid,
      districtSeq: meteringData.districtSeq,
      facilityLocationSeq: meteringData.facilityLocationSeq,
      lineSegment: meteringData.lineSegment,
      remarks: meteringData.remarks,
      isActive: meteringData.isActive === 'Y' ? true : false,
      udf1: meteringData.udF1,
      udf2: meteringData.udF2, 
      udf3: meteringData.udF3,
      adRegionSeq: meteringData.adRegionSeq,
      adProvSeq: meteringData.adProvSeq,
      adMunSeq: meteringData.adMunSeq,
      adBrgySeq: meteringData.adBrgySeq
    })
      this.createdBy = meteringData.createdByName
      this.createdAt = meteringData.createdAt
      this.updatedBy = meteringData.updatedByName || 'NA';
      this.updatedAt = meteringData.updatedAt
      this.statusDate = meteringData.statusDate
   }
   // TODO: Refactor this part to insert the usage permission 
  private _getRoleAuthorization(roles: any[]): any {
    const relevantRoles = roles.filter(role => this.roles.some(r => r.name === role.name && role.isActive === true));
    if (relevantRoles.length > 0) {
      const firstRole = relevantRoles.reduce((minRole, currentRole) => minRole.userRoleId < currentRole.userRoleId ? minRole : currentRole);
      return firstRole;
    }
  }

  private _disableFormFields(role: IRole): void {
    let fieldsToDisable: string[] = [];
    switch (role.name) {
      case RoleNames.Administrator:
        fieldsToDisable = [''];
        break;
      default: 
        fieldsToDisable = [
            'meteringPointName', 'customer', 'installationTypeSeq', 
            'meteringClass', 'transGrid','districtSeq', 
            'facilityLocationSeq', 'lineSegment', 'remarks', 
            'isActive','udf1','udf2','udf3','adRegionSeq', 
            'adMunSeq', 'adProvSeq', 'adBrgySeq'
        ];
        break;
    }

    fieldsToDisable.forEach(field => {
      const control = this.form.get(field);
      if (control)
      {
        control.disable();
      }
    });
  }

  private _getRoles(): Observable<IRole[]> {
    return this._portalService.getRoles().pipe(
      tap(roles => {
        if (!roles) {
          throw new Error('No roles found');
        }
        this.roles = roles;
      }),
      takeUntil(this._onDestroy$)
    );
  }
}