import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
import { takeUntil } from 'rxjs/operators';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';



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
  displayedColumns: string[] = ['module-name', 'create', 'read', 'update', 'action'];
  dataSource: MatTableDataSource<IModule> | null;

  roleField: FormGroup;
  moduleGroup: FormGroup;
  subject$: ReplaySubject<IRole[]> = new ReplaySubject<IRole[]>(1);
  data$: Observable<IRole[]> = this.subject$.asObservable();
  roleName:string;
  roleDescription:string;
  createdBy:string;
  createdAt:Date;
  modifiedBy:string;
  dateModified:Date;
  isActive:boolean;
  permissionList: any[];

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
      id: Number(this._roleId),
      name: ['', Validators.required],
      description: ['', Validators.required],
      isActive:  [Boolean],
      rolePermissionModels: this._fb.array([
        this.moduleGroup
      ])
  });
  }

  ngOnInit(): void {
    
    this._portalService.getRoleId(Number(this._roleId))
    .pipe(takeUntil(this._onDestroy$))
    .subscribe((data: any) => {    
      if (!data) {
        return;
      }
      
      if (!data.rolePermissionModels) {
        return;
      }

      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          this.roleName = data.name;
          this.roleDescription = data.description;
          this.createdBy = data.createdBy;
          this.createdAt = data.createdAt;
          this.modifiedBy = data.updatedBy;
          this.dateModified = data.updatedAt;
          this.isActive = data.isActive;
          this.permissionList = data?.rolePermissionModels
        }
      }
      this.addModuleFromArray(this.permissionList);
      this.subject$.next(data);
    });
    
  this.removeNullOnLoad();

  }


  removeNullOnLoad():void{
    const permissionsControls = this.roleField.get('rolePermissionModels')['controls'];
    const permissions = this.roleField.get('rolePermissionModels');
    
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
      roleId: [list.id], 
      moduleId: [list.moduleId],
      name: [list?.moduleName || list?.name],
      isCreate: [list?.isCreate || true],
      isRead: [list?.isRead || true],
      isUpdate: [list?.isUpdate || false],
      isAdded: [true]
    })

    return this.moduleGroup;
  }

  onSubmit(): void{
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
        modules: <FormArray>this.roleField.controls['rolePermissionModels'].value
      },
      disableClose: true
    });
    dlg.afterClosed().subscribe(res =>{
      this.addModuleFromArray(res);
    });
  }

  removeModule(i: number):void{
    const control = <FormArray>this.roleField.controls['rolePermissionModels'];
    control.removeAt(i);
  }

  addModuleFromArray(data): void {
    if (!data) { 
      return; 
    }
    data.map(item => {
      (<FormArray>this.roleField.get('rolePermissionModels')).push(this.addNewModule(item));
    });
  }

  close(): void{
    this._router.navigateByUrl('apps/roles');
  }
}
