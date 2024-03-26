import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAboutComponent } from './social-about.component';

describe('SocialAboutComponent', () => {
  let component: SocialAboutComponent;
  let fixture: ComponentFixture<SocialAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
