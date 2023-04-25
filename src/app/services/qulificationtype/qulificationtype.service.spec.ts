import { TestBed } from '@angular/core/testing';

import { QulificationTypeService } from './qulificationtype.service';

describe('QulificationTypeService', () => {
  let service: QulificationTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QulificationTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
