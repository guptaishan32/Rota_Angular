import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  template:`
  <div id="carouselExampleIndicators" class="carousel slide">
    <ngb-carousel>
        <ng-template ngbSlide *ngFor="let item of Carousel">
             <div class="carousel-item active">
                 <img src="{{item.imageUrl}}" class="d-block w-100" alt="{{item.Sno}}">
             </div>
        </ng-template>
     </ngb-carousel>
</div>`,
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Carousel = [
    {
      Sno: "1",
      imageUrl:'src/assets/shared/c1.jpg',
      featured: true
    },
    {
      Sno: "2",
      imageUrl:'src/assets/shared/c2.jpg',
      featured: true
    },
    {
      Sno: "3",
      imageUrl:'src/assets/shared/c3.jpg',
      featured: true
    },
    {
      Sno: "4",
      imageUrl:'src/assets/shared/c4.jpg',
      featured: true
    }
  ]

}
