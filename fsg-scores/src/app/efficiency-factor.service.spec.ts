import { TestBed } from '@angular/core/testing';

import { EfficiencyFactorService } from './efficiency-factor.service';

describe('EfficiencyFactorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EfficiencyFactorService = TestBed.inject(EfficiencyFactorService);
    expect(service).toBeTruthy();
  });
});
