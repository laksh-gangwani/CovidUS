import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchService } from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges, OnDestroy {

  @Input() covidData: any;
  states: any[] = [];

  subscription = new Subscription();

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.subscription = this.searchService.getStates()
      .subscribe(
        (data: any) => {
          this.states=data;
        }
      );
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.states=this.covidData;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
