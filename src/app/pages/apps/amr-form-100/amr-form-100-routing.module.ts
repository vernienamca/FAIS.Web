import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../../../FAIS.Web/src/@vex/interfaces/vex-route.interface';
import { AssetMovementReportListComponent } from '../amr-form-100/amr-form-100-list/amr-form-100-list.component';


const routes: VexRoutes = [
  {
    path: '',
    component: AssetMovementReportListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }

//   {
//     path: 'edit/:id',
//     component: AssetMovementReportComponent,
//     data: {
//       toolbarShadowEnabled: false
//     }
//   },
//   {
//     path: 'add',
//     component: AssetMovementReportComponent,
//     data: {
//       toolbarShadowEnabled: false
//     }
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class AssetMovementReportRoutingModule {
}
