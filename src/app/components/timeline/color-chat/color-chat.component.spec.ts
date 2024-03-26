import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChatComponent } from './color-chat.component';

describe('ColorChatComponent', () => {
  let component: ColorChatComponent;
  let fixture: ComponentFixture<ColorChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorChatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
