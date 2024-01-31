import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddRoutingModule } from './user-add-routing.module';
import { UserAddComponent } from './User-add.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserRoutingModule } from '../user-routing.module';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    UserAddComponent 
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    UserAddRoutingModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    UserRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class UserAddModule { }
