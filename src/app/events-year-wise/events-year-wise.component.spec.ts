import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsYearWiseComponent } from './events-year-wise.component';

describe('EventsYearWiseComponent', () => {
  let component: EventsYearWiseComponent;
  let fixture: ComponentFixture<EventsYearWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsYearWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsYearWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
