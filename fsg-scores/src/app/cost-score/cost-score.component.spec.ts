import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostScoreComponent } from './cost-score.component';

describe('CostScoreComponent', () => {
  let component: CostScoreComponent;
  let fixture: ComponentFixture<CostScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
