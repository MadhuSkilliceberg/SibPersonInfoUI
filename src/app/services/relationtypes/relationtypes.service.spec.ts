import { TestBed } from '@angular/core/testing';

import { RelationTypesService } from './relationtypes.service';

describe('RelationTypesService', () => {
  let service: RelationTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
