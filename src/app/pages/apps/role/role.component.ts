import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger80ms } from 'src/@vex/animations/stagger.animation';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddModuleComponent } from './add-module/add-module.component';

export interface Modules {
  moduleId: number;
  name: string;
  create: boolean;
  read: boolean;
  update: boolean;
  isAdded: boolean;
}


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
export class RoleComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['module-name', 'create', 'read', 'update', 'action'];
  dataSource:MatTableDataSource<AbstractControl>=new MatTableDataSource<AbstractControl>()
  formArray=new FormArray([])
  arrayOfGroup:FormGroup[]=[];
  public ELEMENT_DATA: Modules[] = [];

  roleField: FormGroup;
  constructor(private fb: FormBuilder,
    private dialog: MatDialog) {}

  // getFormControl(element:AbstractControl,column:string)
  // {
  //   return (element as FormGroup).get(column) as FormControl
  // }
  
  ngAfterViewInit(): void {
    this.loadData();
  }

  ngOnInit(): void {
    this.roleField = this.fb.group({
      roleName: ['', Validators.required],
      roleDesc: ['', Validators.required],
      isActive:  [true],
      permisssions: this.fb.array([
        this.addNewModule()
      ])
  });

  }

  loadData(): void{
    this.formArray=new FormArray(this.ELEMENT_DATA.map(x=>this.getFormGroup(x)))
    this.dataSource=new MatTableDataSource(this.formArray.controls)
  }

  getFormGroup(data:Modules)
  {
    return new FormGroup({
      moduleId:new FormControl(data.moduleId),
      name:new FormControl(data.name),
      create:new FormControl(data.create),
      read:new FormControl(data.read),
      update:new FormControl(data.update),
      isAdded:new FormControl(data.isAdded),
    })

  }

  addNewModule(): FormGroup
  {
    return  this.fb.group({ 
      // moduleId: [Number], 
      name: ['', Validators.required],
      create: [true],
      read: [true],
      update: [false]
    })
  }

  onSubmit(): void{
    // const data = Object.assign({}, this.roleField.value);

    // data.permissions = this.permissions;
    

  }
  

  addModuleBtn() : void{
    let dlg = this.dialog.open(AddModuleComponent, {
      width: '702px',
      data:{
        title: 'Add Module',
        modules: this.formArray.value
      }
    });
    dlg.afterClosed().subscribe(res =>{
      this.addModuleFromArray(res);
      this.loadData();
    });
  }

  removeModule(moduleId):void{
    this.removeModuleFromArray(moduleId.value);
  }

  removeModuleFromArray(key: number) {
    this.ELEMENT_DATA.forEach((value,index)=>{
      if(value.moduleId==key) this.ELEMENT_DATA.splice(index,1);
    });
  this.loadData();
  }

  addModuleFromArray(data) {
  data.forEach((item)=>{
     this.ELEMENT_DATA.push(item);
  });
  }
}
