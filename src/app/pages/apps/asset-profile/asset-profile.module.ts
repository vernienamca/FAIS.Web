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
import { RelativeDateTimeModule } from 'src/@vex/pipes/relative-date-time/relative-date-time.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AssetProfileListComponent } from './asset-profile-list/asset-profile-list.component';
import { AssetProfileRoutingModule } from './asset-profile-routing.module';
import { AssetProfileComponent } from './asset-profile.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AssetConfirmationDialogComponent} from './asset-confirmation-dialog/asset-confirmation-dialog.component'
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AssetProfileListComponent, AssetProfileComponent, AssetConfirmationDialogComponent],
  imports: [
    CommonModule,
    AssetProfileRoutingModule,
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
    FlexLayoutModule,
    SecondaryToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    NgxMatSelectSearchModule,
    MatDividerModule
  ]
})
export class AssetProfileModule {
}
