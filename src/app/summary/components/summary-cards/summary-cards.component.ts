import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary-cards',
  templateUrl: './summary-cards.component.html',
  styleUrls: ['./summary-cards.component.css']
})
export class SummaryCardsComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  @Input() covidStateData: any;
  summaryData: any = {};
  summaryStateData: any = {};
  constructor() {}
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.summaryData=this.covidData;
    this.summaryStateData = this.covidStateData;
  }
}
