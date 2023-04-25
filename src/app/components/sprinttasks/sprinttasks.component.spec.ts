import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintTasksComponent } from './sprinttasks.component';

describe('SprintTasksComponent', () => {
  let component: SprintTasksComponent;
  let fixture: ComponentFixture<SprintTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
