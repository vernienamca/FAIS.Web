import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { CostCentersListComponent } from './cost-centers-list/cost-centers-list.component';

const routes: VexRoutes = [
  {
    path: '',
    component: CostCentersListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class CostCentersRoutingModule {
}
