import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailsComponent } from './useremails.component';

describe('UserEmailsComponent', () => {
  let component: UserEmailsComponent;
  let fixture: ComponentFixture<UserEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
