import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardTaskListComponent } from './user-card-task-list.component';

describe('UserCardTaskListComponent', () => {
  let component: UserCardTaskListComponent;
  let fixture: ComponentFixture<UserCardTaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardTaskListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
