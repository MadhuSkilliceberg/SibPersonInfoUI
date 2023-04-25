import { TestBed } from '@angular/core/testing';

import { CompanyReviewsService } from './companyreviews.service';

describe('CompanyReviewsService', () => {
  let service: CompanyReviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyReviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
