import { TestBed } from '@angular/core/testing';

import { LookUpValuesService } from './look-up-values.service';

describe('LookUpValuesService', () => {
  let service: LookUpValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookUpValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
