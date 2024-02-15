import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { LibraryTypeOptionListComponent } from './library-type-options-list/library-type-options-list.component';

const routes: VexRoutes = [
  {
    path: '',
    component: LibraryTypeOptionListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class LibraryTypeOptionsRoutingModule {
}
