import { TestBed } from '@angular/core/testing';

import { InstitutionEmailsService } from './institutionemails.service';

describe('InstitutionEmailsService', () => {
  let service: InstitutionEmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionEmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
