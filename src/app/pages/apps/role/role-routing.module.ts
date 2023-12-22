import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleComponent } from './role.component';
import { PageMode } from 'src/app/core/enums/page-mode.enum';

const routes: VexRoutes = [
  {
    path: '',
    component: RoleListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: ':id',
    component: RoleComponent,
    data: {
      pageMode: PageMode.Edit,
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class RoleRoutingModule {
}
