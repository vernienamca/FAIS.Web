import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, of, takeUntil } from 'rxjs';

export interface IAppVersion {
  versionNo: number;
  date: Date;
  amendment: string;
}

const ELEMENT_DATA: IAppVersion[] = [
  {versionNo: 1.1, date: new Date('7/28/2023'), amendment: 'Fixed issue on region filter'},
  {versionNo: 1.0, date: new Date('7/27/2023'), amendment: 'Initial Release'},
];

@Component({
  selector: 'vex-app-version',
  templateUrl: './app-version.component.html',
  styleUrls: ['./app-version.component.scss']
})
export class AppVersionComponent implements OnInit {
  displayedColumns: string[] = ['version', 'date', 'amendment'];
  dataSource = ELEMENT_DATA;
  versionForm: FormGroup;
  latestVersion:IAppVersion;

  get formControls() {
    return {
      versionNo: this.versionForm.get('versionNo'),
      versionDate: this.versionForm.get('versionDate'),
      amendment: this.versionForm.get('amendment'),
    }
  }

  private _onDestroy$ = new Subject<void>();

  constructor(private _fb: FormBuilder) {
    this.versionForm = this._fb.group({
      versionNo: ['',Validators.required],
      versionDate: ['',Validators.required],
      amendment: ['',Validators.required],
    });
  }

  ngOnInit(): void {
    of(this.dataSource)
    .pipe(takeUntil(this._onDestroy$))
    .subscribe((data:any) => {
      this.latestVersion = data[0];
    });
  }


}
