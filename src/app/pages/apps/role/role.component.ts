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

  private _roleId = '';
  private _onDestroy$ = new Subject<void>();

  constructor(private _fb: FormBuilder,
    private _dialog: MatDialog,
    private _router: Router,
    private _route: ActivatedRoute,
    private _portalService: PortalService,
  ) {
    this.roleField = this._fb.group({
      roleName: ['', Validators.required],
      roleDesc: ['', Validators.required],
      isActive:  [Boolean],
      permissions: this._fb.array([
        this.moduleGroup
      ])
  });
  }

  ngOnInit(): void {
    this._roleId = this._route.snapshot.paramMap.get('id');
    
    this._portalService.getRoles()
    .pipe(takeUntil(this._onDestroy$))
    .subscribe(data => {
      if (!data) {
        return;
      }
      
      data.forEach(role =>{
        if (role.id === Number(this._roleId)) {          
          this.roleName = role.name;
          this.roleDescription = role.description;
          this.createdBy = role.createdBy;
          this.createdAt = role.createdAt;
          this.modifiedBy = role.updatedBy;
          this.dateModified = role.updatedAt;
          this.isActive = role.isActive;
        }
      });
      this.subject$.next(data);
    });
    
  this.removeNullOnLoad();

  }

  removeNullOnLoad():void{
    const permissionsControls = this.roleField.get('permissions')['controls'];
    const permissions = this.roleField.get('permissions');
    
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
      id: [list.id], 
      name: [list.name],
      create: [true],
      read: [true],
      update: [false],
      isAdded: [list?.isAdded]
    })

    return this.moduleGroup;
  }

  onSubmit(): void{
    console.log(this.roleField.value);
  }

  addModuleBtn() : void{
    let dlg = this._dialog.open(AddModuleComponent, {
      width: '702px',
      data:{
        title: 'Add Module',
        modules: <FormArray>this.roleField.controls['permissions'].value
      },
      disableClose: true
    });
    dlg.afterClosed().subscribe(res =>{
      this.addModuleFromArray(res);
    });
  }

  removeModule(i: number):void{
    const control = <FormArray>this.roleField.controls['permissions'];
    control.removeAt(i);
  }

  addModuleFromArray(data) {
    data.forEach((list)=>{
      (<FormArray>this.roleField.get('permissions')).push(this.addNewModule(list));
    });
  }

  close(): void{
    this._router.navigateByUrl('apps/roles');
  }
}
