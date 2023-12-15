import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAddRoutingModule } from './User-Edit-routing.module';
import { UserEditComponent } from './components/User-Add/User-Edit.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivityComponent } from './components/activity/activity.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    UserEditComponent, ActivityComponent 

  ],
  imports: [
    MatInputModule,
    MatIconModule,
    CommonModule,
    UserAddRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
 
  ]
})
export class UserEditModule { }
