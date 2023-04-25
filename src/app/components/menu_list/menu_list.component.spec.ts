import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu_ListComponent } from './menu_list.component';

describe('Menu_ListComponent', () => {
  let component: Menu_ListComponent;
  let fixture: ComponentFixture<Menu_ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Menu_ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu_ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
