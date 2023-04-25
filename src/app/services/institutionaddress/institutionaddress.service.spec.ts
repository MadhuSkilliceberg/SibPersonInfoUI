import { TestBed } from '@angular/core/testing';

import { InstitutionAddressService } from './institutionaddress.service';

describe('InstitutionAddressService', () => {
  let service: InstitutionAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
