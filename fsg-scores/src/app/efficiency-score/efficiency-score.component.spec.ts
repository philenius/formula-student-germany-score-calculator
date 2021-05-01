import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EfficiencyScoreComponent } from './efficiency-score.component';

describe('EfficiencyScoreComponent', () => {
  let component: EfficiencyScoreComponent;
  let fixture: ComponentFixture<EfficiencyScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficiencyScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
