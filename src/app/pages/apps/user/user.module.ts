import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from '../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../@vex/components/breadcrumbs/breadcrumbs.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { UserComponent } from './user.component';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { UserRoleListComponent } from './user-role-list/user-role-list.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { AddRoleDialogComponent } from './add-role-dialog/add-role-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ResetPasswordDialogComponent } from './reset-password-dialog/reset-password-dialog.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    UserListComponent, 
    UserComponent, 
    UserRoleListComponent, 
    AddRoleDialogComponent, 
    ResetPasswordDialogComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTabsModule,
    SecondaryToolbarModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class UserModule {
}
