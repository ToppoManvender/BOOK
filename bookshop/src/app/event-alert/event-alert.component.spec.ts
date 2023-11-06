import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAlertComponent } from './event-alert.component';

describe('EventAlertComponent', () => {
  let component: EventAlertComponent;
  let fixture: ComponentFixture<EventAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventAlertComponent]
    });
    fixture = TestBed.createComponent(EventAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
