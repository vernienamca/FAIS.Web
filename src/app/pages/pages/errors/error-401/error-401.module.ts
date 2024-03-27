import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error401RoutingModule } from './error-401-routing.module';
import { Error401Component } from './error-401.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [Error401Component],
  imports: [
    CommonModule,
    Error401RoutingModule,
    MatIconModule
  ]
})
export class Error401Module {
}
