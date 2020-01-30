import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelerationScoreComponent } from './acceleration-score.component';

describe('AccelerationScoreComponent', () => {
  let component: AccelerationScoreComponent;
  let fixture: ComponentFixture<AccelerationScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccelerationScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccelerationScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
