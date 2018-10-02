import { TestBed } from '@angular/core/testing';

import { GetBalanceService } from './get-balance.service';

describe('GetBalanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBalanceService = TestBed.get(GetBalanceService);
    expect(service).toBeTruthy();
  });
});
