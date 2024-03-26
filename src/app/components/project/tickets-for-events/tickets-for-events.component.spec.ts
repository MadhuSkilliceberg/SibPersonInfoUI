import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsForEventsComponent } from './tickets-for-events.component';

describe('TicketsForEventsComponent', () => {
  let component: TicketsForEventsComponent;
  let fixture: ComponentFixture<TicketsForEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsForEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsForEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
