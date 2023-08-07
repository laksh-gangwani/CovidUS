import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStatesComponent } from './top-states.component';

describe('TopStatesComponent', () => {
  let component: TopStatesComponent;
  let fixture: ComponentFixture<TopStatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopStatesComponent]
    });
    fixture = TestBed.createComponent(TopStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
