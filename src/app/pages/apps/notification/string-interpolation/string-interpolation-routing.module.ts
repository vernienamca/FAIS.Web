import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';
import { StringInterpolationListComponent } from './string-interpolation-list/string-interpolation-list.component';
import { StringInterpolationComponent } from './string-interpolation.component';

const routes: VexRoutes = [
  {
    path: '',
    component: StringInterpolationListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'edit/:id',
    component: StringInterpolationComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class StringInterpolationRoutingModule {
}
