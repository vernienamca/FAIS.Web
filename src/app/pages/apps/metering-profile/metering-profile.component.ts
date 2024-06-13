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
import { MatDialog } from '@angular/material/dialog';
import { MeteringConfirmationDialogComponent } from './metering-confirmation-dialog/metering-confirmation-dialog.component';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { LibraryTypeCodes } from 'src/app/core/enums/library-types.enum';
import { DialogComponent } from '../dialog/dialog.component';

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
 createdAt: Date | null = null;
 updatedBy: string;
 updatedAt: Date;
 roleIds: number[] = [];
 roles: IRole[] = [];
 isAdmin: boolean = false;
 isSaving: boolean;
 hasAccess = false;
 regions: any[] = [];
 provinces: any[] = [];
 municipalities: any[] =[];
 barangays: any[] =[];

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

    this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      const permission = data.filter(a => a.moduleId === ModuleEnum.AddorEditMeteringProfile);
      if (!permission || permission.some(s => s.isRead) === false) {
        this._router.navigate([`pages/error-401`]);
      }
      if(permission.some(s => s.isUpdate) === false) {
        this.form.controls['meteringPointName'].disable();
        this.form.controls['customer'].disable();
        this.form.controls['installationTypeSeq'].disable();
        this.form.controls['meteringClass'].disable();
        this.form.controls['transGrid'].disable();
        this.form.controls['districtSeq'].disable();
        this.form.controls['facilityLocationSeq'].disable();
        this.form.controls['lineSegment'].disable();
        this.form.controls['remarks'].disable();
        this.form.controls['isActive'].disable();
        this.form.controls['udf1'].disable();
        this.form.controls['udf2'].disable();
        this.form.controls['udf3'].disable();
        this.form.controls['adRegionSeq'].disable();
        this.form.controls['adMunSeq'].disable();
        this.form.controls['adProvSeq'].disable();
        this.form.controls['adBrgySeq'].disable();
      }
      this.hasAccess = permission.some(s => s.isUpdate);
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

    this._getLookUps();
    this._getRegions();
    this._getProvinces();
    this._getMunicipalities();
    this._getBarangays();

    if(this.id){
      this.isEditMode = true;
      this._getMeteringProfile(this.id);
    }
    };

   save(): void {
    const dialogRef = this._dialog.open(DialogComponent, {
      data: {
        cancelButtonLabel: "Cancel",
        confirmButtonLabel: "Yes, Proceed",
        dialogHeader: "Confirmation",
        dialogContent: "Are you sure you want to proceed saving?",
        moduleName: 'Metering Profile'
      },
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        this.isSaving = false;  
        return;
      }
      if (this.isEditMode) {
        editdata.id = parseInt(this._route.snapshot.paramMap.get('id'));
        editdata.createdBy = data.createdBy;
        this._updateMetering(editdata)
      } else {
        this._addMetering(data);
      }
    });
    const data = Object.assign({},this.form.value)
    const editdata = Object.assign({}, this.form.getRawValue())
    data.createdBy = parseInt(localStorage.getItem('user_id'));
    data.isActive = data.isActive ? 'Y' : 'N';
    editdata.isActive = editdata.isActive ? 'Y' : 'N';
    editdata.updatedBy = this.userId;
   }

  ngOnDestroy(): void {
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

      if (roleAuthorized.name === 'Metering Librarian') {
        const meteringLibrarianRole = this.roles.find(role => role.name === 'Metering Librarian');
        this.roleIds.push(meteringLibrarianRole.id)
      }
    });
}
  
  private _addMetering(data: IMeteringProfile): void {
    data.statusDate = new Date();
    data.createdAt = new Date();
    this._portalService.createMeteringProfile(data)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      const notifData = {
        roleIds: this.roleIds, 
        id: data.result.id,
        assetName: data.result.meteringPointName,
        editMode: this.isEditMode,
        isAdmin: this.isAdmin,
        ModuleId: ModuleEnum.MeteringProfile
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
        this._router.navigate([`apps/metering-profile/edit/${notifData.id}`]); 
      }, 2000);
  });
}

  private _updateMetering(data: IMeteringProfile): void{
    data.statusDate = new Date();
    data.createdAt = this.createdAt
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
        ModuleId: ModuleEnum.MeteringProfile
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

  private _getRoleAuthorization(roles: any[]): any {
    const relevantRoles = roles.filter(role => this.roles.some(r => r.name === role.name && role.isActive === true));
    if (relevantRoles.length > 0) {
      const firstRole = relevantRoles.reduce((minRole, currentRole) => minRole.userRoleId < currentRole.userRoleId ? minRole : currentRole);
      return firstRole;
    }
  }

  private _getLookUps(): void {
    const codes = 
    [ LibraryTypeCodes.InstallationType
    , LibraryTypeCodes.MeteringClassification
    , LibraryTypeCodes.MeteringTransmissionGrid
    , LibraryTypeCodes.FacilityLocation
    , LibraryTypeCodes.DistrictOffice];

    this._portalService.getDropdownValues(codes)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data) {
        return;
      }
      this.installationType = data.filter(type => type.dropdownCode == LibraryTypeCodes.InstallationType);
      this.meteringClassification = data.filter(type => type.dropdownCode == LibraryTypeCodes.MeteringClassification);
      this.transmissionGrid = data.filter(type => type.dropdownCode == LibraryTypeCodes.MeteringTransmissionGrid);
      this.districtOffice = data.filter(type => type.dropdownCode == LibraryTypeCodes.DistrictOffice);
      this.facilityLocation = data.filter(type => type.dropdownCode == LibraryTypeCodes.FacilityLocation);
    })
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

  private _getRegions(): void {
    this._portalService.getRegions()
        .pipe(takeUntil(this._onDestroy$))
        .subscribe(data => {
            if(!data){
                return;
            }
            this.regions = data;
    });
  }

  private _getProvinces(): void {
      this._portalService.getProvinces()
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
              if(!data){
                  return;
              }
              this.provinces = data;
      });
  }

  private _getMunicipalities(): void {
      this._portalService.getMunicipalities()
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
              if(!data){
                  return;
              }
              this.municipalities = data;
      });
  }

  private _getBarangays(): void {
      this._portalService.getBarangays()
          .pipe(takeUntil(this._onDestroy$))
          .subscribe(data => {
              if(!data){
                  return;
              }
              this.barangays = data;
      });
  }
  
}