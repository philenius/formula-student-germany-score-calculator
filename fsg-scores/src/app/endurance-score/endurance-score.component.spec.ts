import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnduranceScoreComponent } from './endurance-score.component';

describe('EnduranceScoreComponent', () => {
  let component: EnduranceScoreComponent;
  let fixture: ComponentFixture<EnduranceScoreComponent>;

  beforeEach(async(() => {
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
