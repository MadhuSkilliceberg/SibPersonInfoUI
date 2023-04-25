import { TestBed } from '@angular/core/testing';

import { UserEmailsService } from './useremails.service';

describe('UserEmailsService', () => {
  let service: UserEmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
