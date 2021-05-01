import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BppScoreComponent } from './bpp-score.component';

describe('BppScoreComponent', () => {
  let component: BppScoreComponent;
  let fixture: ComponentFixture<BppScoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BppScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BppScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
