import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkidpadScoreComponent } from './skidpad-score.component';

describe('SkidpadScoreComponent', () => {
  let component: SkidpadScoreComponent;
  let fixture: ComponentFixture<SkidpadScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkidpadScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkidpadScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
