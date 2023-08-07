import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-state-page',
  templateUrl: './state-page.component.html',
  styleUrls: ['./state-page.component.css']
})
export class StatePageComponent implements OnInit {
  covidData: any;

  constructor(private dataService: DataService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.dataService.getStateCurData()
      .subscribe(
        (data: any) => {
          this.covidData=data;
        }
      );
  }

  searchState(state: string) {
    const states = this.covidData
      .filter(
        (s: any) => s.state.toLowerCase().includes(state.toLowerCase())
      );

    this.searchService.setStates(states);
  }

}
