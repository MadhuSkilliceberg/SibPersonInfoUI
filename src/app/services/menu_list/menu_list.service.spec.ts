import { TestBed } from '@angular/core/testing';

import { Menu_ListService } from './menu_list.service';

describe('Menu_ListService', () => {
  let service: Menu_ListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Menu_ListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
