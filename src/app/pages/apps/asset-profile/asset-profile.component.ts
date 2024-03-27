import { Component, OnDestroy, OnInit,ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder, UntypedFormControl  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute,Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IChart } from 'src/app/core/models/chart';
import { ICostCenter } from 'src/app/core/models/cost-center';
import { ILibraryTypes } from 'src/app/core/models/library-types';
import { PortalService } from 'src/app/core/services/portal.service';
import { IAssetProfile } from 'src/app/core/models/asset-profile';
import { SecurityService } from 'src/app/core/services/security.service';
import {IRole} from 'src/app/core/models/role'

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
 costCenters: ICostCenter[] = [];
 filteredlibraryTypes: ILibraryTypes[] = [];
 createdBy: string;
 createdAt: Date;
 updatedBy: string;
 updatedAt: Date;
 roleId: number;
 roles: IRole[] = [];

 get formControls() {
  return {
    assetName: this.form.get('assetname'),
    rcaGL: this.form.get('rcagl'),
    assetCategory: this.form.get('assetCategoryId'),
    slNo: this.form.get('slno'),
    assetClass: this.form.get('assetClassId'),
    costCenter: this.form.get('costcenter'),
    description: this.form.get('description'),
    economicLife: this.form.get('economiclife'),
    residualLife: this.form.get('residuallife'),
    isActive: this.form.get('isActive')
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
  description: [''],
  economiclife: ['',Validators.required],
  residuallife: ['',Validators.required],
  isActive: ['Y', []]
    });
  }

  ngOnInit(): void {
  this.userId = parseInt(localStorage.getItem('user_id'));
  this.id = parseInt(this._route.snapshot.paramMap.get('id'));
  this._getRoles();
  this._checkFormFields();
    this._portalService.getChartAccounts()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      this.chartofAccounts = data;
    })

    this._portalService.getLibraryTypes()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data){
        return;
      }
      const libraryTypesData: ILibraryTypes[] = data;
      this.filteredlibraryTypes = libraryTypesData.filter(type => type.code === 'AST');
    })
    
    this._portalService.getCostCenters()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data) {
        return;
      }
      this.costCenters = data;
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
        const padLibrarianRole = this.roles.find(role => role.name === 'PAD Librarian');
        if (padLibrarianRole) {
          this.roleId = padLibrarianRole.id;
          this._disableFormFields(roleAuthorized);
        }
      }
      else if (roleAuthorized.name === 'PAD Librarian') {
        const armdLibrarianRole = this.roles.find(role => role.name === 'ARMD Librarian');
        if (armdLibrarianRole) {
          this.roleId = armdLibrarianRole.id;
          this._disableFormFields(roleAuthorized);
        }
      }
    });
}
  
  private _addAsset(data: IAssetProfile): void {
    this._portalService.addAssetProfile(data)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
      this.id = data.id;
      this._securityService.postNotifRole(this.roleId,this.id,data.name, this.isEditMode)
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
    this._portalService.updateAssetProfile(this.id,data)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if(!data){
        return;
      }
   
      this.id = data.result.id;
      this._securityService.postNotifRole(this.roleId,this.id,data.result.name,this.isEditMode)
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
      isActive: assetData.isActive === 'Y' ? true : false
    })
    this.createdBy = assetData.createdByName
    this.createdAt = assetData.createdAt
    this.updatedBy = assetData.updatedByName || 'NA';
    this.updatedAt = assetData.updatedAt
    this.statusDate = assetData.statusDate
   }
          
   
   private _getRoleAuthorization(roles: any[]): any {
    const relevantRoles = roles.filter(role => role.name === 'ARMD Librarian' || role.name === 'PAD Librarian');
    if (relevantRoles.length > 0) {
      const firstRole = relevantRoles.reduce((minRole, currentRole) => minRole.id < currentRole.id ? minRole : currentRole);
      return firstRole;
    }

    else {
      this._router.navigate(['/pages/error-401']); 
    }
  }
 
  private _disableFormFields(role: any): any{
    if(role.name == 'ARMD Librarian'){
      const fieldsToDisable = ['rcaglId', 'rcaSLId', 'costcenter', 'economiclife', 'residuallife'];
      fieldsToDisable.forEach(field => {
        const control = this.form.get(field);
        if (control) {
          control.disable();
        }
  });
    } else if(role.name == 'PAD Librarian'){
      const fieldsToDisable =['name', 'assetCategoryId', 'assetClassId', 'description'];
      fieldsToDisable.forEach(field => {
        const control = this.form.get(field);
        if (control) {
          control.disable();
        }
      })
    }
}

private  _getRoles () :void{
  this._portalService.getRoles()
  .pipe(takeUntil(this._onDestroy$))
  .subscribe(data => {
    if(!data) {
      return;
    }
    this.roles = data;
  });
}
}