import { TestBed } from '@angular/core/testing';

import { AccelerationScoreService } from './acceleration-score.service';

describe('AccelerationScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccelerationScoreService = TestBed.get(AccelerationScoreService);
    expect(service).toBeTruthy();
  });
});
