import { TestBed } from '@angular/core/testing';

import { FamilyEducationDetailsService } from './familyeducationdetails.service';

describe('FamilyEducationDetailsService', () => {
  let service: FamilyEducationDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyEducationDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
