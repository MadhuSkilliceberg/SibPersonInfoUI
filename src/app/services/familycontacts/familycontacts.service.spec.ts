import { TestBed } from '@angular/core/testing';

import { FamilyContactsService } from './familycontacts.service';

describe('FamilyContactsService', () => {
  let service: FamilyContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
