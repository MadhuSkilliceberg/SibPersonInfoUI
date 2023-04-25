import { TestBed } from '@angular/core/testing';

import { IndustryTypesService } from './industrytypes.service';

describe('IndustryTypesService', () => {
  let service: IndustryTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustryTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
