import { Component, OnInit } from '@angular/core';
import { Events_data } from '../shared/Events_data';
import { AllEvents } from '../shared/allEvents';
@Component({
  selector: 'featuredEvents',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.scss']
})
export class FeaturedEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events:AllEvents[] = Events_data;
   

}
