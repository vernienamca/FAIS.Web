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
import { PlantInformationListComponent } from './plant-information-list/plant-information-list.component';
import { PlantInformationRoutingModule } from './plant-information-routing.module';
import { RelativeDateTimeModule } from 'src/@vex/pipes/relative-date-time/relative-date-time.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlantInformationComponent } from './plant-information.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import {WjGridModule} from '@grapecity/wijmo.angular2.grid';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from 'mat-timepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';

@NgModule({
  declarations: [PlantInformationListComponent, PlantInformationComponent],
  imports: [
    CommonModule,
    PlantInformationRoutingModule,
    PageLayoutModule,
    BreadcrumbsModule,
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
    RelativeDateTimeModule,
    MatProgressBarModule,
    MatDialogModule,
    MatDividerModule,
    FlexLayoutModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTabsModule,
    SecondaryToolbarModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTimepickerModule,
    WjGridModule,
    WjInputModule
  ]
})
export class PlantInformationModule {
}
