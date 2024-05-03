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
import { MeteringProfileListComponent } from './metering-profile-list/metering-profile-list.component';
import { MeteringProfileRoutingModule } from './metering-profile-routing.module';
import { MeteringProfileComponent } from './metering-profile.component';
import { ComponentsAutocompleteRoutingModule } from '../../ui/components/components-autocomplete/components-autocomplete-routing.module';
import { ComponentsOverviewAutocompleteModule } from '../../ui/components/components-overview/components/components-overview-autocomplete/components-overview-autocomplete.module';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MeteringConfirmationDialogComponent} from './metering-confirmation-dialog/metering-confirmation-dialog.component'
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MeteringProfileListComponent, MeteringProfileComponent, MeteringConfirmationDialogComponent],
  imports: [
    CommonModule,
    MeteringProfileRoutingModule,
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
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    MatSelectModule,
    MatButtonToggleModule,
    ComponentsAutocompleteRoutingModule,
    ComponentsOverviewAutocompleteModule,
    SecondaryToolbarModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDividerModule,
    FlexLayoutModule
  ]
})
export class MeteringProfileModule {
}
