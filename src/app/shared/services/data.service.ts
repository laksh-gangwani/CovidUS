import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAZCurData() {
    return this.http.get('https://api.covidtracking.com/v1/states/az/current.json')
  }
  getStateCurData() {
    return this.http.get('https://api.covidtracking.com/v1/states/current.json');
  }
  getStateDailyData(state: string) {
    return this.http.get(`https://api.covidtracking.com/v1/states/${state.toLowerCase()}/daily.json`);
  }
}
