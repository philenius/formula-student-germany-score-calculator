import { TestBed } from '@angular/core/testing';

import { BppScoreService } from './bpp-score.service';

describe('BppScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BppScoreService = TestBed.inject(BppScoreService);
    expect(service).toBeTruthy();
  });
});
