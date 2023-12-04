import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatInputModule } from '@angular/material/input';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    FontAwesomeModule,
    MatInputModule,
    FlexModule
  ]
})
export class ChangePasswordModule { }
