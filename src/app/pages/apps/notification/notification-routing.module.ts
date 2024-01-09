import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { StringInterpolationListComponent } from './string-interpolation/string-interpolation-list/string-interpolation-list.component';
import { StringInterpolationAddComponent } from './string-interpolation/string-interpolation-add/string-interpolation-add.component'


const routes: VexRoutes = [
  {
    path: '',
    component: StringInterpolationListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'apps/string-interpolation-add',
    component: StringInterpolationAddComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class NotificationRoutingModule {
}
