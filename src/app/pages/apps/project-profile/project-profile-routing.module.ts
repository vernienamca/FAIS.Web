import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { ProjectProfileListComponent } from './project-profile-list/project-profile-list.component';
// import { ProjectProfileComponent } from './project-profile.component';

const routes: VexRoutes = [
  {
    path: '',
    component: ProjectProfileListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
  // {
  //   path: 'edit/:id',
  //   component: ProjectProfileComponent,
  //   data: {
  //     toolbarShadowEnabled: false
  //   }
  // },
  // {
  //   path: 'add',
  //   component: ProjectProfileComponent,
  //   data: {
  //     toolbarShadowEnabled: false
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ProjectProfileRoutingModule {
}
