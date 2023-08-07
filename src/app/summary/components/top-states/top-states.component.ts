import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-top-states',
  templateUrl: './top-states.component.html',
  styleUrls: ['./top-states.component.css']
})
export class TopStatesComponent implements OnInit, OnChanges {
  @Input() covidStateData: any;
  topPositive: any[] = [];
  topDeath: any[] = [];
  topNegative: any[] = [];

  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnChanges(): void {
    this.topPositive = this.covidStateData
        ?.sort((a: any, b: any) => b.positive - a.positive)
        .slice(0,5);

    this.topDeath = this.covidStateData
        ?.sort((a: any, b: any) => b.death - a.death)
        .slice(0,5);

    this.topNegative = this.covidStateData
        ?.sort((a: any, b: any) => b.negative - a.negative)
        .slice(0,5);
    console.log(this.topPositive);
    console.log(this.topDeath);
    console.log(this.topNegative);
  }


}
