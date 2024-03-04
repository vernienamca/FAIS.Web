import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { CostCentersListComponent } from './cost-centers-list/cost-centers-list.component';
import { CostCenterComponent } from './cost-center.component';

const routes: VexRoutes = [
  {
    path: '',
    component: CostCentersListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'edit/:id',
    component: CostCenterComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: CostCenterComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class CostCentersRoutingModule {
}
