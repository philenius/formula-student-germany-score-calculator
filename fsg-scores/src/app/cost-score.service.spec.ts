import { TestBed } from '@angular/core/testing';

import { CostScoreService } from './cost-score.service';

describe('CostScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostScoreService = TestBed.inject(CostScoreService);
    expect(service).toBeTruthy();
  });
});
