import { TestBed } from '@angular/core/testing';

import { InstitutionContactsService } from './institutioncontacts.service';

describe('InstitutionContactsService', () => {
  let service: InstitutionContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
