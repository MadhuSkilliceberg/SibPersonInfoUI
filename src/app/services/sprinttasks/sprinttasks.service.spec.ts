import { TestBed } from '@angular/core/testing';

import { SprintTasksService } from './sprinttasks.service';

describe('SprintTasksService', () => {
  let service: SprintTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
