import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookMessengerChatComponent } from './facebook-messenger-chat.component';

describe('FacebookMessengerChatComponent', () => {
  let component: FacebookMessengerChatComponent;
  let fixture: ComponentFixture<FacebookMessengerChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookMessengerChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookMessengerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
