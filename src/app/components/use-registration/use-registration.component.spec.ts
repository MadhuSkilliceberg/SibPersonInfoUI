import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseRegistrationComponent } from './use-registration.component';

describe('UseRegistrationComponent', () => {
  let component: UseRegistrationComponent;
  let fixture: ComponentFixture<UseRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
