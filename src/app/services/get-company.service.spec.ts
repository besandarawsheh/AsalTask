import { TestBed } from '@angular/core/testing';

import { GetCompanyService } from './get-company.service';

describe('GetCompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCompanyService = TestBed.get(GetCompanyService);
    expect(service).toBeTruthy();
  });
});
