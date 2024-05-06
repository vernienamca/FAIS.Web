import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { TransmissionLineListComponent } from './transmission-line-list/transmission-line-list.component';
import { TransmissionProfileComponent } from './transmission-line.component';

const routes: VexRoutes = [
  {
    path: '',
    component: TransmissionLineListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },

  {
    path: 'edit/:id',
    component: TransmissionProfileComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: TransmissionProfileComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class TransmissionProfileRoutingModule {
}
