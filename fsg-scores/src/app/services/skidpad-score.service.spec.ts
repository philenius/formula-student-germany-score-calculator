import { TestBed } from '@angular/core/testing';

import { SkidpadScoreService } from './skidpad-score.service';

describe('SkidpadScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkidpadScoreService = TestBed.inject(SkidpadScoreService);
    expect(service).toBeTruthy();
  });
});
