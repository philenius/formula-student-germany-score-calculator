import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyScoreComponent } from './efficiency-score.component';

describe('EfficiencyScoreComponent', () => {
  let component: EfficiencyScoreComponent;
  let fixture: ComponentFixture<EfficiencyScoreComponent>;

  beforeEach(async(() => {
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
