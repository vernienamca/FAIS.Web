import { Component } from '@angular/core';

export interface PeriodicElement {
  actions: string;
  module: string;
  timestamp: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { actions: 'System Login', module: 'Login', timestamp: new Date('7/22/2023 9:00 AM') },


  { actions: 'System Login', module: 'Login', timestamp: new Date('7/22/2023 9:00 AM') },

];

@Component({
  selector: 'vex-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  displayedColumns: string[] = ['actionstaken', 'modulename', 'timestamp'];
  dataSource = ELEMENT_DATA;

  /**
   *
   */


}
