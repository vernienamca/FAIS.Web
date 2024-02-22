import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';
import { VexRoutes } from '../../../../@vex/interfaces/vex-route.interface';
import { ProFormaEntriesListComponent } from './pro-forma-entries-list/pro-forma-entries-list.component';
import { ProFormaEntryComponent } from './pro-forma-entry.component';

const routes: VexRoutes = [
  {
    path: '',
    component: ProFormaEntriesListComponent,
    data: {
      toolbarShadowEnabled: false
    }
  },
  {
    path: 'edit/:id',
    component: ProFormaEntryComponent,
    data: {
      toolbarShadowEnabled: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ProFormaEntriesRoutingModule {
}
