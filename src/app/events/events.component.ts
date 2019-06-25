import { Component, OnInit } from '@angular/core';
import { AllEvents } from '../shared/allEvents';
import { Events_data } from '../shared/Events_data';
import { Event } from '../shared/events';
 
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  SelectedYear: AllEvents;
  SelectedEvent: Event;
  ShowEvents = false;
  isselected = false;

  allevents: AllEvents[] = Events_data;

  onSelectYear(year: AllEvents){
    this.SelectedYear = year;
    this.ShowEvents = true;
  }

  onSelectEvent(event: Event){
    this.SelectedEvent = event;
  }
  

}