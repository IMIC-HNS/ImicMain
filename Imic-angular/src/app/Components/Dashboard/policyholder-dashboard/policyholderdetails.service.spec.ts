import { TestBed } from '@angular/core/testing';

import { PolicyholderdetailsService } from './policyholderdetails.service';

describe('PolicyholderdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicyholderdetailsService = TestBed.get(PolicyholderdetailsService);
    expect(service).toBeTruthy();
  });
});
