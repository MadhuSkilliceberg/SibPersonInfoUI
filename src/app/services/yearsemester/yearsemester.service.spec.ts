import { TestBed } from '@angular/core/testing';

import { YearSemesterService } from './yearsemester.service';

describe('YearSemesterService', () => {
  let service: YearSemesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearSemesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
