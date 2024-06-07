import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { DepreciationListComponent } from './depreciation-list/depreciation-list.component';

const routes: VexRoutes = [
  {
    path: '',
    component: DepreciationListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class DepreciationRoutingModule {
}
