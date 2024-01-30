import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from '../user/user.component';

const routes: VexRoutes = [
  {
    path: '',
    component: UserListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'edit/:id',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), QuicklinkModule],
  exports: [RouterModule]
})
export class UserRoutingModule {}
