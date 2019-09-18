import { TestBed } from '@angular/core/testing';

import { AgentregistrationServiceService } from './agentregistration-service.service';

describe('AgentregistrationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentregistrationServiceService = TestBed.get(AgentregistrationServiceService);
    expect(service).toBeTruthy();
  });
});
