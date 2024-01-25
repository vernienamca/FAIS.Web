import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutModule } from '../../../../../../@vex/components/page-layout/page-layout.module';
import { BreadcrumbsModule } from '../../../../../../@vex/components/breadcrumbs/breadcrumbs.module';
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
import { StringInterpolationListComponent } from './string-interpolation-list.component';
import { StringInterpolationRoutingModule } from './string-interpolation-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [StringInterpolationListComponent],
  imports: [
    CommonModule,
    StringInterpolationRoutingModule,
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
    MatSlideToggleModule,
    MatTabsModule,
  ]
})
export class StringInterpolationModule {
}
