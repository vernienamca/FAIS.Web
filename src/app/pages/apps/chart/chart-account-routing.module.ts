import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { ChartListComponent } from '../chart/chart-list/chart-list.component';
import { ChartAccountComponent } from './chart-account.component';

const routes: VexRoutes = [
  {
    path: '',
    component: ChartListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },

  {
    path: 'edit/:id',
    component: ChartAccountComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: ChartAccountComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ChartAccountRoutingModule {
}
