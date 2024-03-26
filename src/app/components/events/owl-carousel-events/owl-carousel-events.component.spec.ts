import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCarouselEventsComponent } from './owl-carousel-events.component';

describe('OwlCarouselEventsComponent', () => {
  let component: OwlCarouselEventsComponent;
  let fixture: ComponentFixture<OwlCarouselEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlCarouselEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwlCarouselEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
