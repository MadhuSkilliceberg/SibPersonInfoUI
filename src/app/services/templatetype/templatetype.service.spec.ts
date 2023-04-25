import { TestBed } from '@angular/core/testing';

import { TemplateTypeService } from './templatetype.service';

describe('TemplateTypeService', () => {
  let service: TemplateTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
