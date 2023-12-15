import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { UserListComponent } from './user-list/user-list.component';
// import { ProfileComponent } from './profile/profile.component';
import { UserEditComponent } from '../User-Edit/components/User-Add/User-Edit.component';

const routes: VexRoutes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'User-Edit',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), QuicklinkModule],
  exports: [RouterModule]
})
export class UserRoutingModule {}
