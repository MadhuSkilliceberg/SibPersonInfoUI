import { TestBed } from '@angular/core/testing';

import { CompanyAddressService } from './companyaddress.service';

describe('CompanyAddressService', () => {
  let service: CompanyAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
