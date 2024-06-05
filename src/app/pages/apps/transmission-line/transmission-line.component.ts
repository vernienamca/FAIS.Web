import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute,Router } from '@angular/router';
import { Subject, takeUntil, tap , Observable, switchMap,combineLatest, startWith } from 'rxjs';
import { PortalService } from 'src/app/core/services/portal.service';
import { SecurityService } from 'src/app/core/services/security.service';
import {IRole} from 'src/app/core/models/role'
import { MatDialog } from '@angular/material/dialog';
import { ModuleEnum } from 'src/app/core/enums/module-enum';
import { ITransmissionProfile } from 'src/app/core/models/transmission-profile';
import { TransmissionConfirmationDialogComponent } from './transmission-profile-confirmation-dialog/transmission-confirmation-dialog.component';
@Component({
  selector: 'vex-transmission',
  templateUrl: './transmission-line.component.html',
  styleUrls: ['./transmission-line.component.scss'],
})

export class TransmissionProfileComponent implements OnInit, OnDestroy {
 id: number;
 userId: number;
 isEditMode: boolean = false;
 layoutCtrl = new UntypedFormControl('fullwidth');
 form: FormGroup;
 statusDate: Date | null = null;
 statusLabel = 'Active';
 voltageLevel: any [] = [];
 circuitNumber: any[] = [];
 createdBy: string;
 createdAt: Date;
 updatedBy: string;
 updatedAt: Date;
 roleIds: number[] = [];
 roles: IRole[] = [];
 isSaving: boolean;
 isAdmin: boolean;
 hasAccess = false;
 st$ = new Subject<number>();
 sp$  = new Subject<number>();
 cp$ = new Subject<number>();
 wp$ = new Subject<number>();
 slwt$  = new Subject<number>();

 get formControls() {
  return {
    lineStretch: this.form.get('lineStretch'),
    voltageId: this.form.get('voltageId'),
    st: this.form.get('st'),
    sp: this.form.get('sp'),
    cp: this.form.get('cp'),
    wp: this.form.get('wp'),
    slwt: this.form.get('slwt'),
    totalstructures: this.form.get('totalstructures'),
    installationdate: this.form.get('installationdate'),
    routelength: this.form.get('routelength'),
    noCircuitId: this.form.get('noCircuitId'),
    circuitlength: this.form.get('circuitlength'),
    conductorsize: this.form.get('conductorsize'),
    noConductor: this.form.get('noConductor'),
    isActive: this.form.get('isActive'),
    remarks: this.form.get('remarks'),
    udf1: this.form.get('udf1'), 
    udf2: this.form.get('udf2'),
    udf3: this.form.get('udf3')
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
    lineStretch: ['', Validators.required,], 
    voltageId: ['', Validators.required],
    st: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    sp: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    cp: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    wp: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    slwt: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    totalstructures: [''],
    installationdate: [''],
    routelength: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]], 
    noCircuitId: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
    circuitlength: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    conductorsize: ['', Validators.required],
    noConductor: ['', Validators.required],
    isActive: ['Y', []],
    remarks: [''],
    udf1: [''], 
    udf2: [''],
    udf3: [''] 
    });
  
    this._securityService.getPermissions(parseInt(localStorage.getItem('user_id')))
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === ModuleEnum.AddorEditTransmissionProfile);
        if (!permission || permission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        if(permission.some(s => s.isUpdate) === false) {
          this.form.controls['lineStretch'].disable();
          this.form.controls['voltageId'].disable();
          this.form.controls['st'].disable();
          this.form.controls['sp'].disable();
          this.form.controls['cp'].disable();
          this.form.controls['wp'].disable();
          this.form.controls['slwt'].disable();
          this.form.controls['totalstructures'].disable();
          this.form.controls['installationdate'].disable();
          this.form.controls['routelength'].disable();
          this.form.controls['noCircuitId'].disable();
          this.form.controls['circuitlength'].disable();
          this.form.controls['conductorsize'].disable();
          this.form.controls['noConductor'].disable();
          this.form.controls['isActive'].disable();
          this.form.controls['remarks'].disable();
          this.form.controls['udf1'].disable();
          this.form.controls['udf2'].disable();
          this.form.controls['udf3'].disable();
        }
        this.hasAccess = permission.some(s => s.isUpdate);
      });
    }

  ngOnInit(): void {
    combineLatest([
      this.form.get('st').valueChanges.pipe(startWith(null)),
      this.form.get('sp').valueChanges.pipe(startWith(null)),
      this.form.get('cp').valueChanges.pipe(startWith(null)),
      this.form.get('wp').valueChanges.pipe(startWith(null)),
      this.form.get('slwt').valueChanges.pipe(startWith(null))
    ])
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(() => this.OnStructureChange());
  this.userId = parseInt(localStorage.getItem('user_id'));
  this.id = parseInt(this._route.snapshot.paramMap.get('id'));

  this._getRoles().pipe(
    tap(() => this._checkFormFields()),  
    switchMap(() => this._portalService.getLibraryTypes()),
    takeUntil(this._onDestroy$)
  ).subscribe(data => {
    this.voltageLevel = data.filter(type => type.code =='VL');
    this.circuitNumber = data.filter(type => type.code =='CN');
  })

    if(this.id){
      this.isEditMode = true;
      this._getTransmissionProfile(this.id);
    }
    };

   save(): void{
    this.isSaving = true;
    this._dialog.open(TransmissionConfirmationDialogComponent,{
    width: '500px',
    disableClose: true
    })
    .afterClosed().subscribe((result: boolean) => {
      if (result)
        if(this.isEditMode)
          {
           editdata.id = parseInt(this._route.snapshot.paramMap.get('id'));
           editdata.createdBy = data.createdBy;
           this._updateTransmissionProfile(editdata)
          }
          else {
            this._createTransmissionProfile(data); 
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

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();  
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
      
       if (roleAuthorized.name === 'ARMD Analyst') {
        const armdAnalystRole = this.roles.find(role => role.name === 'ARMD Analyst');
        this.roleIds.push(armdAnalystRole.id)
      }
    });
}
  
  private _createTransmissionProfile(data: ITransmissionProfile): void {
    data.statusDate = new Date();
    this._portalService.createTransmissionProfile(data)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      this.id = data.id;
      const notifData = {
        roleIds: this.roleIds, 
        id: this.id,
        assetName: data.name,
        editMode: this.isEditMode,
        isAdmin: this.isAdmin,
        ModuleId: ModuleEnum.TransmissionLineProfile
      };
      this._securityService.postNotifRole(notifData)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
      })

      this._snackBar.open('Asset has been successfully saved.', 'Close');
      setTimeout(() => {
        this._router.navigate([`apps/transmission-profile/edit/${data.id}`]); 
      }, 2000);
  });
}

  private _updateTransmissionProfile(data: ITransmissionProfile): void{
    data.statusDate = new Date();
    this._portalService.updateTransmissionProfile(this.id,data)
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
        ModuleId: ModuleEnum.TransmissionLineProfile
      };
    this._securityService.postNotifRole(notifData)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
      })
        let snackBarRef = this._snackBar.open('Asset has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
        window.location.reload();
    });
    })
  }

   private _getTransmissionProfile(id: number): void{
      this._portalService.getTransmissionProfile(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
        this._initializeData(data)
      }) 
  }

  private _initializeData(data: any): void {
    const transmissionData = data.result
    this.form.patchValue({
      lineStretch: transmissionData.lineStretch,
      voltageId: transmissionData.voltageId,
      st: transmissionData.st,
      sp: transmissionData.sp,
      cp: transmissionData.cp,
      wp: transmissionData.wp,
      slwt: transmissionData.slwt,
      installationdate: transmissionData.installationDate, 
      routelength: transmissionData.routeLength,
      noCircuitId: transmissionData.noCircuitId,
      circuitlength: transmissionData.circuitLength,
      conductorsize: transmissionData.conductorSize,
      noConductor: transmissionData.noConductor,
      isActive: transmissionData.isActive === 'Y' ? true : false,
      udf1: transmissionData.udF1,
      udf2: transmissionData.udF2,
      udf3: transmissionData.udF3,
      remarks: transmissionData.remarks
    })
      this.createdBy = transmissionData.createdByName
      this.createdAt = transmissionData.createdAt
      this.updatedBy = transmissionData.updatedByName || 'NA';
      this.updatedAt = transmissionData.updatedAt
      this.statusDate = transmissionData.statusDate
   }

  private _getRoleAuthorization(roles: any[]): any {
    const relevantRoles = roles.filter(role => this.roles.some(r => r.name === role.name && role.isActive === true));
    if (relevantRoles.length > 0) {
      const firstRole = relevantRoles.reduce((minRole, currentRole) => minRole.userRoleId < currentRole.userRoleId ? minRole : currentRole);
      return firstRole;
    }
    else { 
      this._router.navigate(['/pages/error-401']); 
    }
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

   OnStructureChange(): void 
  {
    const st = +this.form.get('st').value;
    const sp = +this.form.get('sp').value;
    const cp = +this.form.get('cp').value;
    const wp = +this.form.get('wp').value;
    const slwt = +this.form.get('slwt').value;

    const total = st + sp + cp + wp + slwt;
    this.form.get('totalstructures').setValue(total);
}
}