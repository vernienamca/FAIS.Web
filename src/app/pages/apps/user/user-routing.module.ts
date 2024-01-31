import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { UserListComponent } from './user-list/user-list.component';
// import { ProfileComponent } from './profile/profile.component';
import { UserEditComponent } from '../User-Edit/components/User-Edit/User-Edit.component';

import { UserAddComponent } from '../user/user-add/User-add.component';

const routes: VexRoutes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'user-edit',
    component: UserEditComponent
  },

  {
    path: 'apps/user-add',
    component: UserAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes), QuicklinkModule],
  exports: [RouterModule]
})
export class UserRoutingModule {}
