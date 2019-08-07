import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRequestsPage } from './booking-requests.page';

describe('BookingRequestsPage', () => {
  let component: BookingRequestsPage;
  let fixture: ComponentFixture<BookingRequestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingRequestsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingRequestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
