import { TestBed } from '@angular/core/testing';

import { AdattendanceApprovalService } from './adattendance-approval.service';

describe('AdattendanceApprovalService', () => {
  let service: AdattendanceApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdattendanceApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
