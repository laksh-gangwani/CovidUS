import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartData, ChartDataset, ChartEvent, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-state-chart',
  templateUrl: './state-chart.component.html',
  styleUrls: ['./state-chart.component.css']
})
export class StateChartComponent implements OnInit,OnChanges {
  @Input() state: string = 'AZ';

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  barChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {data: [], label: 'Positive Cases'}
    ],
  };
  // barChartLabels: 
  barChartOptions: ChartOptions = {
    responsive: true
  }
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getStateData();
  }
  getStateData() {
    this.dataService.getStateDailyData(this.state)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.barChartData.datasets[0].data =  response.map((obj: any) => obj.positive);
          this.barChartData.labels = response.map((obj: any) => obj.lastUpdateEt);

        }
      );
  }
  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }
}
