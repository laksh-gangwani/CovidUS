import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  states = new Subject();

  constructor() { }

  setStates(states: any) {
    this.states.next(states);
  }

  getStates(): Observable<any> {
    return this.states.asObservable();
  }
}
