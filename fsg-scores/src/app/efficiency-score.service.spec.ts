import { TestBed } from '@angular/core/testing';

import { EfficiencyScoreService } from './efficiency-score.service';

describe('EfficiencyScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EfficiencyScoreService = TestBed.get(EfficiencyScoreService);
    expect(service).toBeTruthy();
  });
});
