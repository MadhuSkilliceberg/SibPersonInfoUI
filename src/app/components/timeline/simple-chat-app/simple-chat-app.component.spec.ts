import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleChatAppComponent } from './simple-chat-app.component';

describe('SimpleChatAppComponent', () => {
  let component: SimpleChatAppComponent;
  let fixture: ComponentFixture<SimpleChatAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleChatAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleChatAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
