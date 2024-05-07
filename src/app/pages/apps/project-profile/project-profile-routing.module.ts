import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { ProjectProfileListComponent } from './project-profile-list/project-profile-list.component';
import { ProjectProfileComponent } from './project-profile.component';
import { PageMode } from 'src/app/core/enums/page-mode.enum';

const routes: VexRoutes = [
  {
    path: '',
    component: ProjectProfileListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'edit/:id',
    component: ProjectProfileComponent,
    data: {
      pageMode: PageMode.Edit,
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: ProjectProfileComponent,
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
export class ProjectProfileRoutingModule {
}
