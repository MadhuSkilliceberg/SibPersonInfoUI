import { TestBed } from '@angular/core/testing';

import { MarritalStatusService } from './marritalstatus.service';

describe('MarritalStatusService', () => {
  let service: MarritalStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarritalStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
