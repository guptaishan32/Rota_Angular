import { Component, OnInit } from '@angular/core';
import { AllEvents } from '../shared/allEvents';
import { Events_data } from '../shared/Events_data';
 
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
  SelectedMonth: AllEvents;
  ShowEvents = false;
  ShowMonth = false;

  allevents: AllEvents[] = Events_data;

  onSelectYear(year: AllEvents){
    this.SelectedYear = year;
    this.ShowEvents = true;
  }
  SelectMonth(month: AllEvents){
    this.SelectedMonth = month;
    this.ShowMonth = true;
  }

  // trackElement(index: number, element:any){
  //   return element ? element.Event_Name : null;
  // }
}