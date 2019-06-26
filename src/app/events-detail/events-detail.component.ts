import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../shared/events';

@Component({
  selector: 'events-detail',
  templateUrl: './events-detail.component.html',
  styleUrls: ['./events-detail.component.scss']
})

export class EventsDetailComponent implements OnInit {

  // event:AllEvents[] = Events_data;
  // Year= '2018-19'
  // Month= 'August'
  // id = 'TPD18_19_1';
  SelectedEvent: Event;
  @Input()
  event: Event;

  ShowGallery(pic: Event){
    this.SelectedEvent = pic;

  }
         
  constructor() { }

  ngOnInit() {
  }

}
