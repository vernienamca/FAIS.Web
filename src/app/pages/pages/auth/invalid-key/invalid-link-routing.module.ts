import { NgModule } from '@angular/core';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';
import { InvalidLinkComponent } from './invalid-link.component';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

const routes: VexRoutes = [
  {
    path: '',
    component: InvalidLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class InvalidLinkRoutingModule { }
