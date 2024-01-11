import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleComponent } from './module.component';
import { PageMode } from 'src/app/core/enums/page-mode.enum';

const routes: VexRoutes = [
  {
    path: '',
    component: ModuleListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: ':id',
    component: ModuleComponent,
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
export class ModuleRoutingModule {
}
