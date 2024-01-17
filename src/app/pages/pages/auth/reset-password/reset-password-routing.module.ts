import { NgModule } from '@angular/core';
import { VexRoutes } from '../../../../../@vex/interfaces/vex-route.interface';
import { ResetPasswordComponent } from './reset-password.component';
import { RouterModule } from '@angular/router';
import { QuicklinkModule } from 'ngx-quicklink';

const routes: VexRoutes = [
  {
    path: '',
    component: ResetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ResetPasswordRoutingModule { }
