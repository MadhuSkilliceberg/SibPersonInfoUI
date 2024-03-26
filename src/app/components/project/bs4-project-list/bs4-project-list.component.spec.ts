import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs4ProjectListComponent } from './bs4-project-list.component';

describe('Bs4ProjectListComponent', () => {
  let component: Bs4ProjectListComponent;
  let fixture: ComponentFixture<Bs4ProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bs4ProjectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bs4ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
