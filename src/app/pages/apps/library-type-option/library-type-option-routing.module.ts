import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { LibraryTypeOptionListComponent } from './library-type-option-list/library-type-option-list.component';
import { LibraryTypeOptionComponent } from './library-type-option.component';

const routes: VexRoutes = [
  {
    path: '',
    component: LibraryTypeOptionListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'edit/:id',
    component: LibraryTypeOptionComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class LibraryTypeOptionRoutingModule {
}
