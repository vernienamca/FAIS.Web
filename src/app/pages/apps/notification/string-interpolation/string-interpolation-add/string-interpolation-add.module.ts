import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringInterpolationAddRoutingModule } from './string-interpolation-add-routing.module';
import { StringInterpolationAddComponent } from './string-interpolation-add.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NotificationRoutingModule } from '../../notification-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    StringInterpolationAddComponent 

  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    StringInterpolationAddRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    NotificationRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
 
  ]
})
export class StringInterpolationAddModule { }
