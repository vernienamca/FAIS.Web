import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface PeriodicElement {
  versionNo: number;
  date: Date;
  amendment: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {versionNo: 1.1, date: new Date('7/28/2023'), amendment: 'Fixed issue on region filter'},
  {versionNo: 1.0, date: new Date('7/27/2023'), amendment: 'Initial Release'},
];

@Component({
  selector: 'vex-app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.scss']
})
export class AppVersionComponent {
  displayedColumns: string[] = ['version', 'date', 'amendment'];
  dataSource = ELEMENT_DATA;
  versionForm: FormGroup;

  get formControls() {
    return {
      versionNo: this.versionForm.get('versionNo'),
      versionDate: this.versionForm.get('versionDate'),
      amendment: this.versionForm.get('amendment'),
    }
  }

  constructor(private _fb: FormBuilder) {
    this.versionForm = this._fb.group({
      versionNo: ['',Validators.required],
      versionDate: ['',Validators.required],
      amendment: ['',Validators.required],
    });
  }



}
