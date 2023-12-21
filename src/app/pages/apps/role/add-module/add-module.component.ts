import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Modules } from '../role.component';

@Component({
  selector: 'vex-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit{

  public ELEMENT_DATA: Modules[] = [
    {moduleId: 1, name: 'AMR Retirement/Transfer', create: true, read: true,  update: true, isAdded: false},
    {moduleId: 2, name: 'Asset Registers', create: true, read: true, update: false, isAdded: false},
    {moduleId: 3, name: 'Land Transactions', create: false, read: true, update: true, isAdded: false},
    {moduleId: 4, name: 'Asset Movement Report', create: true, read: true, update: false, isAdded: false},
    {moduleId: 5, name: 'Land', create: true, read: true, update: false, isAdded: false},
    {moduleId: 6, name: 'Coding Details', create: true, read: true, update: false, isAdded: false}
  ];

  displayedColumns: string[] = ['module-name', 'action'];
  arrayOfGroup:FormGroup[]=[];
  roleField: FormGroup;
  dataSource = this.ELEMENT_DATA;
  inputData: any;
  moduleDataRow: Modules[]=[];
  local_data:any;
  isAdded: any;
  checkModule: any;

  constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data: Modules,
  private ref: MatDialogRef<AddModuleComponent>,
  ) {
    this.local_data = {...data};
  }

  ngOnInit(): void {
    this.inputData = this.data;
    this.inputData.modules.forEach((module)=>{
      this.checkModule =  module;

    });
  }

  closeDialog(): void{
    this.ref.close(this.moduleDataRow);
  }

  addModule(item):void{
    
    this.moduleDataRow = [...this.moduleDataRow, item];

    for (var i of this.moduleDataRow) {
      i.isAdded = true;
      this.isAdded = i;
    }
  }

  onSubmit():void{

  }
}
