import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { StringInterpolationListComponent } from './string-interpolation/string-interpolation-list/string-interpolation-list.component';

import { TemplateListComponent } from './templates/template-list/template-list.component'


const routes: VexRoutes = [
  {
    path: '',
    component: StringInterpolationListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'templates',
    component: TemplateListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class NotificationRoutingModule {
}
