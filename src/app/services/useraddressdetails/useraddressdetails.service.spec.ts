import { TestBed } from '@angular/core/testing';

import { UserAddressDetailsService } from './useraddressdetails.service';

describe('UserAddressDetailsService', () => {
  let service: UserAddressDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAddressDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
