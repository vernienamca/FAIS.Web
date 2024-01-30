import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringInterpolationAddComponent } from './string-interpolation-add.component';



const routes: Routes = [
  {
    path: '',
    component: StringInterpolationAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StringInterpolationAddRoutingModule { }
