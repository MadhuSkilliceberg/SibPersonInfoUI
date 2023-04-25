import { TestBed } from '@angular/core/testing';

import { UserEducationDetailsService } from './usereducationdetails.service';

describe('UserEducationDetailsService', () => {
  let service: UserEducationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEducationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
