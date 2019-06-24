import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/events';
@Component({
  selector: 'featuredEvents',
  templateUrl: './featured-events.component.html',
  styleUrls: ['./featured-events.component.scss']
})
export class FeaturedEventsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  events:Event[] = [
    {
      "SNo": "1",
      "IndexPageFeatured": true,
      "Year": "2016-17",
      "Event_id": "TPD16_17",
      "Event_date":"12 Aug 2018",
      "Event_Name": "Tree Planation Drive",
      "Event_info": "A Tree Plantation Drive was organised by us on 5th of September 2017. The new team of rotaractors participated in large numbers and continued with the legacy of the previous teams in making every event a success. It was a step to fight against global warming and the rotaractors were enthusiastic in taking up this event.On this Teacher’s Day, we almost tried helping our oldest and most beloved guide, Earth.",
      "Event_pics": ["assets/shared/RACW.jpg"],
    },
    {
      "SNo": "1",
      "IndexPageFeatured": true,
      "Year": "2016-17",
      "Event_id": "TPD16_17",
      "Event_date":"12 Aug 2018",
      "Event_Name": "Tree Planation Drive",
      "Event_info": "A Tree Plantation Drive was organised by us on 5th of September 2017. The new team of rotaractors participated in large numbers and continued with the legacy of the previous teams in making every event a success. It was a step to fight against global warming and the rotaractors were enthusiastic in taking up this event.On this Teacher’s Day, we almost tried helping our oldest and most beloved guide, Earth.",
      "Event_pics": ["assets/shared/RACW.jpg"],
    },
    {
      "SNo": "1",
      "IndexPageFeatured": true,
      "Year": "2016-17",
      "Event_id": "TPD16_17",
      "Event_date":"12 Aug 2018",
      "Event_Name": "Tree Planation Drive",
      "Event_info": "A Tree Plantation Drive was organised by us on 5th of September 2017. The new team of rotaractors participated in large numbers and continued with the legacy of the previous teams in making every event a success. It was a step to fight against global warming and the rotaractors were enthusiastic in taking up this event.On this Teacher’s Day, we almost tried helping our oldest and most beloved guide, Earth.",
      "Event_pics": ["assets/shared/RACW.jpg"],
    },
    {
      "SNo": "1",
      "IndexPageFeatured": true,
      "Year": "2016-17",
      "Event_id": "TPD16_17",
      "Event_date":"12 Aug 2018",
      "Event_Name": "Tree Planation Drive",
      "Event_info": "A Tree Plantation Drive was organised by us on 5th of September 2017. The new team of rotaractors participated in large numbers and continued with the legacy of the previous teams in making every event a success. It was a step to fight against global warming and the rotaractors were enthusiastic in taking up this event.On this Teacher’s Day, we almost tried helping our oldest and most beloved guide, Earth.",
      "Event_pics": ["assets/shared/RACW.jpg"],
    },
    {
      "SNo": "1",
      "IndexPageFeatured": true,
      "Year": "2016-17",
      "Event_id": "TPD16_17",
      "Event_date":"12 Aug 2018",
      "Event_Name": "Tree Planation Drive",
      "Event_info": "A Tree Plantation Drive was organised by us on 5th of September 2017. The new team of rotaractors participated in large numbers and continued with the legacy of the previous teams in making every event a success. It was a step to fight against global warming and the rotaractors were enthusiastic in taking up this event.On this Teacher’s Day, we almost tried helping our oldest and most beloved guide, Earth.",
      "Event_pics": ["assets/shared/RACW.jpg"],
    },
  ]

}
