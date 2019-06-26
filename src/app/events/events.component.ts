import { Component, OnInit } from '@angular/core';
import { Years,  Events_Info } from '../shared/Events_Info';
import { Event } from '../shared/events';
import { AllEvents } from '../shared/allEvents';

//import { EventsService } from '../services/events.service';
 
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  Year = Years;
  Events:AllEvents[]  = Events_Info;  

  checked = false;
  SelectedYear: String;
  SelectedEvent: Event;
  ShowEvents = false;
  isselected = false;
  constructor() { }

  ngOnInit() {
  }
  
  
  onSelectYear(year: String){
    this.SelectedYear = year;
    this.ShowEvents = true;
  }

  onSelectEvent(event: Event){
    this.SelectedEvent = event;
  }
  

}