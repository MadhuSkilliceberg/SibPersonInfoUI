import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactsComponent } from './usercontacts.component';

describe('UserContactsComponent', () => {
  let component: UserContactsComponent;
  let fixture: ComponentFixture<UserContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
