import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { MeteringProfileListComponent } from './metering-profile-list/metering-profile-list.component';
import { MeteringProfileComponent } from './metering-profile.component';
import { PageMode } from 'src/app/core/enums/page-mode.enum';

const routes: VexRoutes = [
  {
    path: '',
    component: MeteringProfileListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'edit/:id',
    component: MeteringProfileComponent,
    data: {
      pageMode: PageMode.Edit,
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: MeteringProfileComponent,
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
export class MeteringProfileRoutingModule {
}