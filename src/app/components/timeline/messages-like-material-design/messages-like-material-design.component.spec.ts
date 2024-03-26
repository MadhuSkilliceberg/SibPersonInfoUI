import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesLikeMaterialDesignComponent } from './messages-like-material-design.component';

describe('MessagesLikeMaterialDesignComponent', () => {
  let component: MessagesLikeMaterialDesignComponent;
  let fixture: ComponentFixture<MessagesLikeMaterialDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesLikeMaterialDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesLikeMaterialDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
