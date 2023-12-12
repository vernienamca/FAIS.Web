import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    MatIconModule,
    MatInputModule,
    FlexModule,
    ReactiveFormsModule
  ]
})
export class ChangePasswordModule { }
