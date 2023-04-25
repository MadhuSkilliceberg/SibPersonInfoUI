import { TestBed } from '@angular/core/testing';

import { CYearsService } from './cyears.service';

describe('CYearsService', () => {
  let service: CYearsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CYearsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
