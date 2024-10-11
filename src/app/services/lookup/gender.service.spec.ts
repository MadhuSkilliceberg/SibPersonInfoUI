import { TestBed } from '@angular/core/testing';

import { LookUpService } from './gender.service';

describe('GenderService', () => {
  let service: LookUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
