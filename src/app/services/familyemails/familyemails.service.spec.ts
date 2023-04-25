import { TestBed } from '@angular/core/testing';

import { FamilyEmailsService } from './familyemails.service';

describe('FamilyEmailsService', () => {
  let service: FamilyEmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyEmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
