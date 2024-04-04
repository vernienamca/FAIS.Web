import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';
import { StringInterpolationListComponent } from './string-interpolation-list/string-interpolation-list.component';
import { StringInterpolationComponent } from './string-interpolation.component';
import { PageMode } from 'src/app/core/enums/page-mode.enum';

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
      pageMode: PageMode.Edit,
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'add',
    component: StringInterpolationComponent,
    data: {
      pageMode: PageMode.Add,
      toolbarShadowEnabled: false
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class StringInterpolationRoutingModule {
}
