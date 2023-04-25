import { TestBed } from '@angular/core/testing';

import { CoutryStatesService } from './coutrystates.service';

describe('CoutryStatesService', () => {
  let service: CoutryStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoutryStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
