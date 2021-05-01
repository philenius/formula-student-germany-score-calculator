import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccelerationScoreComponent } from './acceleration-score.component';

describe('AccelerationScoreComponent', () => {
  let component: AccelerationScoreComponent;
  let fixture: ComponentFixture<AccelerationScoreComponent>;

  beforeEach(waitForAsync(() => {
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
