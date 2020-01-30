import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocrossScoreComponent } from './autocross-score.component';

describe('AutocrossScoreComponent', () => {
  let component: AutocrossScoreComponent;
  let fixture: ComponentFixture<AutocrossScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocrossScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocrossScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
