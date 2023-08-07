import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SummaryCardsComponent } from './components/summary-cards/summary-cards.component';
import { TopStatesComponent } from './components/top-states/top-states.component';
import { ConfirmedByStatesComponent } from './components/confirmed-by-states/confirmed-by-states.component';
import { SharedModule } from '../shared/shared.module';
import { StateChartComponent } from './components/state-chart/state-chart.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardsComponent,
    TopStatesComponent,
    ConfirmedByStatesComponent,
    StateChartComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedModule,
    NgChartsModule
  ]
})
export class SummaryModule { }
