import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSchedulesWithTabsComponent } from './event-schedules-with-tabs.component';

describe('EventSchedulesWithTabsComponent', () => {
  let component: EventSchedulesWithTabsComponent;
  let fixture: ComponentFixture<EventSchedulesWithTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSchedulesWithTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSchedulesWithTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
