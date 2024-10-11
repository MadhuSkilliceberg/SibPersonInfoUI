import { TestBed } from '@angular/core/testing';

import { LookUpValueservice } from './look-up-values.service';

describe('LookUpValuesService', () => {
  let service: LookUpValueservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookUpValueservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
