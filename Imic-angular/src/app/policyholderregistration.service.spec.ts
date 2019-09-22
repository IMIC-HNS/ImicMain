import { TestBed } from '@angular/core/testing';

import { PolicyholderregistrationService } from './policyholderregistration.service';

describe('PolicyholderregistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PolicyholderregistrationService = TestBed.get(PolicyholderregistrationService);
    expect(service).toBeTruthy();
  });
});
