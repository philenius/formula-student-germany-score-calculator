import { TestBed } from '@angular/core/testing';

import { EnduranceScoreService } from './endurance-score.service';

describe('EnduranceScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnduranceScoreService = TestBed.get(EnduranceScoreService);
    expect(service).toBeTruthy();
  });
});
