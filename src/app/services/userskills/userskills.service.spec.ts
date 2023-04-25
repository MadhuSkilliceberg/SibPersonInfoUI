import { TestBed } from '@angular/core/testing';

import { UserSkillsService } from './userskills.service';

describe('UserSkillsService', () => {
  let service: UserSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
