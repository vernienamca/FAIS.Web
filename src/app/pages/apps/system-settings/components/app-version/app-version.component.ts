import { Component } from '@angular/core';

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

  /**
   *
   */


}
