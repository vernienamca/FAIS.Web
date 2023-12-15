import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'vex-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent {

  editModuleForm: FormGroup;
 
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
