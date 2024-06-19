import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../../../FAIS.Web/src/@vex/interfaces/vex-route.interface';
import { AssetMovementReportListComponent } from '../amr-form-100/amr-form-100-list/amr-form-100-list.component';
import { AmrReportDialogComponent } from './amr-form-100-report-sequence/amr-report-dialog.component';
import { PageMode } from 'src/app/core/enums/page-mode.enum';


const routes: VexRoutes = [
  {
    path: '',
    component: AssetMovementReportListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },

  {
    path: 'edit/:id',
    component: AssetMovementReportListComponent,
    data: {
      pageMode: PageMode.Edit,
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: AmrReportDialogComponent,
    data: {
      pageMode: PageMode.Add,
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class AssetMovementReportRoutingModule {
}
