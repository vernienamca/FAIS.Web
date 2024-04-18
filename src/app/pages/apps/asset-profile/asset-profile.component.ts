import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute,Router } from '@angular/router';
import { Subject, takeUntil, tap , Observable, switchMap } from 'rxjs';
import { IChart } from 'src/app/core/models/chart';
import { MatSelect } from '@angular/material/select';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { PortalService } from 'src/app/core/services/portal.service';
import { IAssetProfile } from 'src/app/core/models/asset-profile';
import { SecurityService } from 'src/app/core/services/security.service';
import {IRole} from 'src/app/core/models/role'
import { RoleNames } from 'src/app/core/enums/role.enums';

@Component({
  selector: 'vex-module',
  templateUrl: './asset-profile.component.html',
  styleUrls: ['./asset-profile.component.scss'],
})

export class AssetProfileComponent implements OnInit, OnDestroy {
 id: number;
 userId: number;
 isEditMode: boolean = false;
 layoutCtrl = new UntypedFormControl('fullwidth');
 form: FormGroup;
 statusDate: Date | null = null;
 statusLabel = 'Active';
 chartofAccounts: IChart[] = [];
 costCenterType: any [] = [];
 assetType: any [] = [];
 filteredlibraryTypes: ILibraryTypes[] = [];
 createdBy: string;
 createdAt: Date;
 updatedBy: string;
 updatedAt: Date;
 roleIds: number[] = [];
 roles: IRole[] = [];
 isAdmin: boolean = false;

 get formControls() {
  return {
    assetName: this.form.get('assetname'),
    rcaGL: this.form.get('rcagl'),
    assetCategory: this.form.get('assetCategoryId'),
    slNo: this.form.get('slno'),
    assetClass: this.form.get('assetClassId'),
    assetType: this.form.get('assettype'),
    costCenter: this.form.get('costcenter'),
    description: this.form.get('description'),
    economicLife: this.form.get('economiclife'),
    residualLife: this.form.get('residuallife'),
    isActive: this.form.get('isActive'),
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
   private _router: Router
  ) {
  this.form = this._fb.group({
    name: ['', Validators.required], 
    rcaglId: ['', Validators.required],
    assetCategoryId: [''],
    rcaSLId: ['',Validators.required],
    assetClassId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    costcenter: ['',Validators.required],
    assetType: ['',Validators.required],
    description: [''],
    economiclife: ['',Validators.required], 
    residuallife: ['',Validators.required],
    isActive: ['Y', []],
    udf1: [''], 
    udf2: [''],
    udf3: [''] 
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
      this.costCenterType = data.filter(type => type.code =='CCT');
      this.assetType = data.filter(type => type.code =='AT');
      this.filteredlibraryTypes = data.filter(type => type.code === 'AST');
    })

    if(this.id){
      this.isEditMode = true;
      this._getAsset(this.id);
    }
    };

   save(): void{
    const data = Object.assign({},this.form.value)
    const editdata = Object.assign({}, this.form.getRawValue())
    data.createdBy = parseInt(localStorage.getItem('user_id'));
    data.isActive = data.isActive ? 'Y' : 'N';
    editdata.isActive = editdata.isActive ? 'Y' : 'N';
    editdata.updatedBy = this.userId;

    if(this.isEditMode)
    {
     editdata.id = parseInt(this._route.snapshot.paramMap.get('id'));
     editdata.createdBy = data.createdBy;
     this._updateAsset(editdata)
    }
    else {
      this._addAsset(data);
    }
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
      if (roleAuthorized.name === 'ARMD Librarian') {
        const armdLibrarianRole = this.roles.find(role => role.name === 'ARMD Librarian');
        if (armdLibrarianRole) {
          this.roleIds.push(armdLibrarianRole.id); 
          this._disableFormFields(roleAuthorized);
        }
      }
      else if (roleAuthorized.name === 'PAD Librarian') {
        const padLibrarianRole = this.roles.find(role => role.name === 'PAD Librarian');
        if (padLibrarianRole) {
          this.roleIds.push(padLibrarianRole.id);
          this._disableFormFields(roleAuthorized);
        }
      }

      else if (roleAuthorized.name === 'Administrator') {
        this.isAdmin = true;
       const administratorRole = this.roles.find(role => role.name === 'Administrator');
       this.roleIds.push(administratorRole.id)
        this.roleIds.push()
      }
      else {
        this._disableFormFields(roleAuthorized);
      }
    });
}
  
  private _addAsset(data: IAssetProfile): void {
    data.statusDate = new Date();
    this._portalService.addAssetProfile(data)
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
        isAdmin: this.isAdmin
      };
      this._securityService.postNotifRole(notifData)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
      })

      let snackBarRef = this._snackBar.open('Asset has been successfully saved.', 'Close');
      snackBarRef.afterDismissed().subscribe(() => {
        this._router.navigate([`apps/asset-profile/edit/${data.id}`]);
    });
  });
}

  private _updateAsset(data: IAssetProfile): void{
    data.statusDate = new Date();
    this._portalService.updateAssetProfile(this.id,data)
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
      let snackBarRef = this._snackBar.open('Asset has been successfully updated.', 'Close');
        snackBarRef.afterDismissed().subscribe(() => {
          window.location.reload();
    });
    })
  }

   private _getAsset(id: number): void{
      this._portalService.getAssetProfile(id)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if(!data){
          return;
        }
        this._initializeData(data)
      })
  }

  private _initializeData(data: any): void {
    const assetData = data.result
    console.log('asssetData initialize', assetData)
    this.form.patchValue({
      name: assetData.name,
      assetCategoryId: assetData.categoryId,
      assetClassId : assetData.assetClass,
      description : assetData.description,
      economiclife: assetData.economicLife,
      residuallife: assetData.residualLife,
      rcaglId: assetData.rcaGLId,
      rcaSLId: assetData.rcaslId,
      costcenter: assetData.costCenter,
      assetType: assetData.assetType,
      isActive: assetData.isActive === 'Y' ? true : false,
      udf1: assetData.udF1,
      udf2: assetData.udF2,
      udf3: assetData.udF3
    })
      this.createdBy = assetData.createdByName
      this.createdAt = assetData.createdAt
      this.updatedBy = assetData.updatedByName || 'NA';
      this.updatedAt = assetData.updatedAt
      this.statusDate = assetData.statusDate
   }

  private _getRoleAuthorization(roles: any[]): any {
    const relevantRoles = roles.filter(role => this.roles.some(r => r.name === role.name));
    if (relevantRoles.length > 0) {
      const firstRole = relevantRoles.reduce((minRole, currentRole) => minRole.userRoleId < currentRole.userRoleId ? minRole : currentRole);
      return firstRole;
    }
    else { 
      this._router.navigate(['/pages/error-401']); 
    }
  }

  private _disableFormFields(role: IRole): void {
    let fieldsToDisable: string[] = [];
    switch (role.name) {
      case RoleNames.ARMDLibrarian:
        fieldsToDisable = ['rcaglId', 'rcaSLId', 'costcenter', 'economiclife', 'residuallife'];
        break;
      case RoleNames.PADLibrarian:
        fieldsToDisable = ['name', 'assetCategoryId', 'assetClassId', 'description'];
        break;
      case RoleNames.Administrator:
        fieldsToDisable = [''];
        break;
      default: 
        fieldsToDisable = ['rcaglId', 'rcaSLId', 'costcenter', 'economiclife', 'residuallife','name', 'assetCategoryId', 'assetClassId', 'description', 'isActive','udf1','udf2','udf3'];
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