import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemSettingsRoutingModule } from './system-settings-routing.module';
import { SystemSettingsComponent } from './components/system-settings/system-settings.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppVersionComponent } from './components/app-version/app-version.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SystemSettingsComponent,
    AppVersionComponent
  ],
  imports: [
    CommonModule,
    SystemSettingsRoutingModule,
    MatTabsModule,
    MatGridListModule,
    FontAwesomeModule,
    MatTableModule,
    ReactiveFormsModule
  ]
})
export class SystemSettingsModule { }
