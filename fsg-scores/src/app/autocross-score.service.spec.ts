import { TestBed } from '@angular/core/testing';

import { AutocrossScoreService } from './autocross-score.service';

describe('AutocrossScoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutocrossScoreService = TestBed.inject(AutocrossScoreService);
    expect(service).toBeTruthy();
  });
});
