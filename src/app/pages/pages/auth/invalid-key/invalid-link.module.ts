
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidLinkRoutingModule } from './invalid-link-routing.module';
import { InvalidLinkComponent } from './invalid-link.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    InvalidLinkComponent
  ],
  imports: [
    CommonModule,
    InvalidLinkRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
})
export class InvalidLinkModule { }