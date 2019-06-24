import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'youtubeVideos',
  template:`
  <div class="infoline"><span> {{title}} </span></div>
    <div class="container-fluid"
    fxLayout="row"
    fxLayout.xs="column"
    fxLayoutGap="10px">
   
  <div *ngFor="let video of YouTubeVideos" fxFlex>
    <div>
        <p id="vheadings">{{video.title}} <small>- {{video.year}} {{video.subtitle }}</small></p>
    </div>  
    <div class="embed-responsive embed-responsive-16by9">
        <youtube-player
        width="450" 
        height="315"
        videoId="{{video.link}}"
        (ready)="savePlayer($event)"
        (change)="onStateChange($event)"
      ></youtube-player>
    </div>
  </div>
  </div>
  `,
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent implements OnInit {

  title = "Projects";
  
  constructor() { }

  YouTubeVideos = [
    {
      id:'0',
      title: 'RACW',
      subtitle:' ',
      year: '2k17-18',
      link: 'cRQCO9ErIyI',
      featured: true
    },
    {
      id:'1',
      title: 'Cancer Awareness',
      subtitle:'7 Projects in a day',
      year: ' ',
      link: 'R4qa7xf0fi8?start=6',
      featured: true
    },
    {
      id:'2',
      title: 'Friendship Day',
      subtitle:' ',
      year: '2k16-17 ',
      link: 'D66dPIKT8RU?start=2',
      featured: true
    }
  ]

  ngOnInit() {
  }

  player: YT.Player;
  private Id:string[] =[ 'cRQCO9ErIyI','R4qa7xf0fi8','D66dPIKT8RU'];
 
  savePlayer(player) {
    this.player = player;
    // console.log('Video Url', this.player.getVideoUrl);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  playVideo(){
    this.player.playVideo();
  }

  pauseVideo(){
    this.player.pauseVideo();
  }

}
