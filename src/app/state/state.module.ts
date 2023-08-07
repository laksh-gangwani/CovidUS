import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StatePageComponent } from './components/state-page/state-page.component';
import { SharedModule } from '../shared/shared.module';
import { DataTableComponent } from './components/data-table/data-table.component';


@NgModule({
  declarations: [
    StatePageComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    StateRoutingModule,
    SharedModule
  ]
})
export class StateModule { }
