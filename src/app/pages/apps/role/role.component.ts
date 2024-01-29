import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, UntypedFormControl } from '@angular/forms';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddModuleComponent } from './add-module/add-module.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IModule } from 'src/app/core/models/module';
import { IRole } from 'src/app/core/models/role';
import { PortalService } from 'src/app/core/services/portal.service';
import { filter, takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPermission } from 'src/app/core/models/permission';

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
  // displayedColumns: string[] = ['module-name', 'create', 'read', 'update', 'action'];
  // dataSource: MatTableDataSource<IModule> | null;
  layoutCtrl = new UntypedFormControl('fullwidth');

  roleField: FormGroup;
  moduleGroup: FormGroup;
  // subject$: ReplaySubject<IRole> = new ReplaySubject<IRole>(1);
  // data$: Observable<IRole> = this.subject$.asObservable();
  user:any;
  roleName:string;
  roleDescription:string;
  createdBy:string;
  createdAt:Date;
  modifiedBy:string;
  dateModified:Date;
  isActiveModel:boolean;
  isActive:boolean;
  role: any;
  permissionList: IPermission[];

  private _roleId = this._route.snapshot.paramMap.get('id');
  private _onDestroy$ = new Subject<void>();

  constructor(private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
    private _snackbar: MatSnackBar,
  ) {
    this.roleField = this._fb.group({
      roleId: Number(this._roleId),
      name: ['', Validators.required],
      description: ['', Validators.required],
      isActive:  [this.isActiveModel],
      updatedBy: [this.user],
      rolePermissionModel: this._fb.array([
        this.moduleGroup
      ])
  });

  const userId = parseFloat(localStorage.getItem('user_id'));
  if (!userId) {
    return;
  }
  this._portalService.getUser(userId)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      this.user = data;          
    });
  }

  ngOnInit(): void {
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
      this.createdBy = this.role.createdBy;
      this.createdAt = this.role.createdAt;
      this.modifiedBy = this.role.updatedBy;
      this.dateModified = this.role.updatedAt;
      this.isActive = this.role.isActive === 'Y';
 
      this.addModuleFromArray(this.permissionList);

    });
    
  this.removeNullOnLoad();

  }


  removeNullOnLoad():void{
    const permissionsControls = this.roleField.get('rolePermissionModel')['controls'];
    const permissions = this.roleField.get('rolePermissionModel');
    
    permissions.value.forEach(e => {
      if (e === null) {
        for (let i = 0; i < permissionsControls.length; i++) {
        this.removeModule(i)
        }
      }
    });

    
  }

  addNewModule(list) : FormGroup
  {        
    this.moduleGroup = this._fb.group({
      roleId: [list.roleId ?? Number(this._roleId)],
      moduleId: [list.moduleId ?? list.id],
      name: [list?.moduleName || list?.name],
      isCreate: [list?.isCreate || true],
      isRead: [list?.isRead || true],
      isUpdate: [list?.isUpdate || false],
      isAdded: [true]
    })

    return this.moduleGroup;
  }

  onSubmit(): void{
    this.user = this.roleField.get('updatedBy').patchValue(this.user.id)
    this._portalService.updaterolepermission(this.roleField.value).subscribe({
      next: (data) => {
        console.log('Role updated successfully:', data);
        this._snackbar.open('Role updated successfully.', 'Close', {
          duration: 5000,
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
  

  addModuleBtn() : void{
    let dlg = this._dialog.open(AddModuleComponent, {
      width: '702px',
      data:{
        title: 'Add Module',
        modules: <FormArray>this.roleField.controls['rolePermissionModel'].value
      },
      disableClose: true
    });
    dlg.afterClosed().subscribe(res =>{
      this.addModuleFromArray(res);
    });
  }

  removeModule(i: number):void{
    const control = <FormArray>this.roleField.controls['rolePermissionModel'];
    control.removeAt(i);
  }

  addModuleFromArray(data): void {
    if (!data) { 
      return; 
    }
    data.map(item => {
      (<FormArray>this.roleField.get('rolePermissionModel')).push(this.addNewModule(item));
    });
  }

  close(): void{
    this._router.navigateByUrl('apps/roles');
  }
}
