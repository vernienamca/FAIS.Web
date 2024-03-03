import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from '../user/user.component';
import { UserRoleListComponent } from './user-role-list/user-role-list.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: VexRoutes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: UserComponent
  },
  {
    path: 'edit/:id',
    component: UserComponent
  },
  {
    path: '',
    component: UserRoleListComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), QuicklinkModule],
  exports: [RouterModule]
})
export class UserRoutingModule {}
