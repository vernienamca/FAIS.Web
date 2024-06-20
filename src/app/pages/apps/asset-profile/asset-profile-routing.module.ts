import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { AssetProfileListComponent } from './asset-profile-list/asset-profile-list.component';
import { AssetProfileComponent } from './asset-profile.component';

const routes: VexRoutes = [
  {
    path: '',
    component: AssetProfileListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },

  {
    path: 'edit/:id',
    component: AssetProfileComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: AssetProfileComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class AssetProfileRoutingModule {
}