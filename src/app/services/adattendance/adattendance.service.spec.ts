import { TestBed } from '@angular/core/testing';

import { AdAttendanceService } from './adattendance.service';

describe('AdattendanceService', () => {
  let service: AdAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
