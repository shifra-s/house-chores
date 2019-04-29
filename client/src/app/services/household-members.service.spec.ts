import { TestBed } from '@angular/core/testing';

import { HouseholdMembersService } from './household-members.service';

describe('HouseholdMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseholdMembersService = TestBed.get(HouseholdMembersService);
    expect(service).toBeTruthy();
  });
});
