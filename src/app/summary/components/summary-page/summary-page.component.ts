import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.css']
})
export class SummaryPageComponent implements OnInit{
  covidData: any = {};
  covidStateData: any = {}; 
  stateToSearch: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAZCurData()
      .subscribe(
        (data: any) => {
          this.covidData=data;
        }
      );
    this.dataService.getStateCurData()
      .subscribe(
        (data: any) => {
          this.covidStateData=data;
        }
      );
  }

  searchState(searchTerm: string) {
    this.stateToSearch=searchTerm;
  }
}
