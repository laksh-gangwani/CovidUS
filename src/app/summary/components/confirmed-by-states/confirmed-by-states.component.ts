import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-confirmed-by-states',
  templateUrl: './confirmed-by-states.component.html',
  styleUrls: ['./confirmed-by-states.component.css']
})
export class ConfirmedByStatesComponent implements OnInit {

  @Output() state = new EventEmitter<string>();

  constructor() {}
  ngOnInit(): void {
    
  }
  passStateData(searchTerm: string) {
    this.state.emit(searchTerm);
  }

}
