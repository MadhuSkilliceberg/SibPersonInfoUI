import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteChatComponent } from './white-chat.component';

describe('WhiteChatComponent', () => {
  let component: WhiteChatComponent;
  let fixture: ComponentFixture<WhiteChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhiteChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
