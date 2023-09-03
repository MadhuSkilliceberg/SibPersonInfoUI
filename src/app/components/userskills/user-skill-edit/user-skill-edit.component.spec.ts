import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillEditComponent } from './user-skill-edit.component';

describe('UserSkillEditComponent', () => {
  let component: UserSkillEditComponent;
  let fixture: ComponentFixture<UserSkillEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSkillEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSkillEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
