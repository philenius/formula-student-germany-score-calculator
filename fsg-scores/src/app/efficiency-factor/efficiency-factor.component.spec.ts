import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EfficiencyFactorComponent } from './efficiency-factor.component';

describe('EfficiencyFactorComponent', () => {
  let component: EfficiencyFactorComponent;
  let fixture: ComponentFixture<EfficiencyFactorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficiencyFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
