import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { AuditLogsListComponent } from './audit-logs-list/audit-logs-list.component';

const routes: VexRoutes = [
  {
    path: '',
    component: AuditLogsListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class AuditLogsRoutingModule {
}
