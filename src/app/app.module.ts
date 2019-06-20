import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YoutubeVideoComponent } from './home/youtube-video/youtube-video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubeVideoComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,YoutubePlayerModule,
    MatToolbarModule,MatGridListModule,MatCardModule,MatExpansionModule,
    FlexLayoutModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
