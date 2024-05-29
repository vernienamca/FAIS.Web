import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, UntypedFormControl } from '@angular/forms';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import { MatDialog } from '@angular/material/dialog';
import { AddModuleComponent } from './add-module/add-module.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IRole } from 'src/app/core/models/role';
import { PortalService } from 'src/app/core/services/portal.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPermission } from 'src/app/core/models/permission';
import { SecurityService } from 'src/app/core/services/security.service';

@Component({
  selector: 'vex-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  animations: [
    stagger80ms,
    scaleIn400ms,
    fadeInRight400ms,
    fadeInUp400ms
  ]
})
export class RoleComponent implements OnInit {
  form: FormGroup;
  layoutCtrl = new UntypedFormControl('fullwidth');
  moduleGroup: FormGroup;
  user:any;
  roleId: number;
  userId: number;
  roleName:string;
  roleDescription:string;
  createdByName:string;
  createdAt:Date;
  modifiedByName:string;
  dateModified:Date;
  isActiveModel:boolean;
  isActive:boolean = true;
  role: any;
  permissionList: IPermission[];
  isEditMode:boolean = false;
  id: number;
  responseData: any;
  hasAccess = true;

  get formControls() {
    return {
      name: this.form.get('name'),
      description: this.form.get('description'),
      isActive: this.form.get('isActive')
    };
  }

  get permission(): FormArray {
    return this.form.get('rolePermissionModel') as FormArray;
  }

  private _roleId = this._route.snapshot.paramMap.get('id');
  private _onDestroy$ = new Subject<void>();

  constructor(private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackbar: MatSnackBar,
    private _securityService: SecurityService
  ) {
    this.roleId = parseInt(this._route.snapshot.paramMap.get('id'));
    this.form = this._fb.group({
      roleId: Number(this._roleId),
      name: ['', Validators.required],
      description: ['', Validators.required],
      isActive:  [this.isActive],
      updatedBy: [this.userId],
      rolePermissionModel: this._fb.array([
        this.moduleGroup
      ])
    });

    const userId = parseInt(localStorage.getItem('user_id'));
    this._portalService.getUser(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        if (!data) {
          return;
        }
        this.user = data;    
        this.userId = this.user.id;
      });

    this._securityService.getPermissions(userId)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(data => {
        const permission = data.filter(a => a.moduleId === 20);
        if (!permission || permission.some(s => s.isRead) === false) {
          this._router.navigate([`pages/error-401`]);
        }
        if (permission.some(s => s.isUpdate) === false) {
          this.form.controls['name'].disable();
          this.form.controls['description'].disable();
          this.form.controls['isActive'].disable();
        }
        this.hasAccess = permission.some(s => s.isUpdate);
      });
}

  ngOnInit(): void {
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._portalService.getRoleId(Number(this._roleId))
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((data: any) => {
        if (!data) {
          return;
        }
        this.role = data.role;
        this.permissionList = data.permissions;
        this.roleName = this.role.name;
        this.roleDescription = this.role.description;
        this.createdByName = this.role.createdByName;
        this.createdAt = this.role.createdAt;
        this.modifiedByName = this.role.updatedByName;
        this.dateModified = this.role.updatedAt;
        this.isActive = this.role.isActive === 'Y';
        this.addModuleFromArray(this.permissionList);
      });

    this.removeNullOnLoad();
  }

  removeNullOnLoad(): void{
    const permissionsControls = this.form.get('rolePermissionModel')['controls'];
    const permissions = this.form.get('rolePermissionModel');
    permissions.value.forEach(e => {
      if (e === null) {
        for (let i = 0; i < permissionsControls.length; i++) {
        this.removeModule(0)
        }
      }
    });
  }

  addNewModule(list) : FormGroup {        
    this.moduleGroup = this._fb.group({
      roleId: [list.roleId ?? Number(this._roleId)],
      moduleId: [list.moduleId ?? list.id],
      name: [list?.moduleName || list?.name],
      isCreate: [list?.isCreate || false],
      isRead: [list?.isRead || false],
      isUpdate: [list?.isUpdate || false],
      createdAt: [list?.createdAt],
      createdBy: [list?.createdBy],
      updatedBy: [list?.updatedBy || this.userId],
      isAdded: [true]
    })
    return this.moduleGroup;
  }

  save(): void {   
    const data = Object.assign({}, this.form.value);
    if (this.roleId) {
      data.updatedBy = parseInt(localStorage.getItem('user_id'));
      this._updateRole(data);
      return;
    }
    data.isActive = this.isActive ? 'Y' : 'N'; 
    data.createdBy = this.userId;
    this._addRole(data);
  }

  addModuleBtn() : void{
    let dlg = this._dialog.open(AddModuleComponent, {
      width: '702px',
      data:{
        userId: this.userId,
        title: 'Add Module',
        modules: <FormArray>this.form.controls['rolePermissionModel'].value
      },
      disableClose: true
    });
    dlg.afterClosed().subscribe(res =>{
      this.addModuleFromArray(res);
    });
  }

  removeModule(i: number):void{
    const control = <FormArray>this.form.controls['rolePermissionModel'];
    control.removeAt(i);
  }

  addModuleFromArray(data): void {
    if (!data) { 
      return; 
    }
    data.map((item) => {
      (<FormArray>this.form.get('rolePermissionModel')).push(this.addNewModule(item));
    });
  }

  close(): void{
    this._router.navigateByUrl('apps/roles');
  }

  private _addRole(data: IRole): void {
    this._portalService.addRole(data)
      .subscribe({
        next: (data) => {
          let snackBarRef = this._snackbar.open('Role added successfully.', 'Close', {
            duration: 5000,
          });
          snackBarRef.afterDismissed().subscribe(() => {
            this._router.navigate([`apps/roles/`]);
          });
          this.responseData = data.result;
        },
        error: (error) => {
          console.error('Error adding role:', error);
          this._snackbar.open('Error adding role.', 'Close', {
            duration: 5000,
          });
        },
        complete: () => {
          this.form.value.rolePermissionModel.forEach(rolePermission => {
            rolePermission.roleId = this.responseData.id;
            this._portalService.addPermission(rolePermission).subscribe()
          });
        }
        }
      );
  }

  private _updateRole(data: IRole): void {
    this._portalService.updaterolepermission(data)
      .subscribe({
        next: () => {
          let snackBarRef = this._snackbar.open('Role updated successfully.', 'Close');
          snackBarRef.afterDismissed().subscribe(() => {
            this._router.navigate([`apps/roles/`]);
          });
        },
        error: (error) => {
          console.error('Error updating role:', error);
          this._snackbar.open('Error updating role.', 'Close', {
            duration: 5000,
          });
        }
        }
      );
  }
}
