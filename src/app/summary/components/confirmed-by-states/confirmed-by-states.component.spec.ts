import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedByStatesComponent } from './confirmed-by-states.component';

describe('ConfirmedByStatesComponent', () => {
  let component: ConfirmedByStatesComponent;
  let fixture: ComponentFixture<ConfirmedByStatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmedByStatesComponent]
    });
    fixture = TestBed.createComponent(ConfirmedByStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
