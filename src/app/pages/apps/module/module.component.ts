import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'vex-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent {

  editModuleForm: FormGroup;
  moduleName:string;
  moduleDescription:string;
  isActive:boolean;
  createdBy:string;
  createdAt:Date;
  modifiedBy:string;
  dateModified:Date;
 
  constructor(private fb: FormBuilder) {}

  ngOnInit(){
    this.editModuleForm = this.fb.group({
      moduleName: ['', Validators.required],
      description: '',
      url: '',
      isActive: true,
     
    });
  }

  onSubmit() : void{
    console.log('form value',this.editModuleForm.value);
  }
}
