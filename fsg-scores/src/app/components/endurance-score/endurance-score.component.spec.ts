import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnduranceScoreComponent } from './endurance-score.component';

describe('EnduranceScoreComponent', () => {
  let component: EnduranceScoreComponent;
  let fixture: ComponentFixture<EnduranceScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnduranceScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnduranceScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
