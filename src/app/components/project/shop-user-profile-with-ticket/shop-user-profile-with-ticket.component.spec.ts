import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopUserProfileWithTicketComponent } from './shop-user-profile-with-ticket.component';

describe('ShopUserProfileWithTicketComponent', () => {
  let component: ShopUserProfileWithTicketComponent;
  let fixture: ComponentFixture<ShopUserProfileWithTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopUserProfileWithTicketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopUserProfileWithTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
