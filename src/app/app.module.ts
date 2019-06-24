import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import { YoutubePlayerModule } from 'ngx-youtube-player';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedEventsComponent } from './featured-events/featured-events.component';
import { EventsComponent } from './events/events.component';
import { from } from 'rxjs';
import { EventsYearWiseComponent } from './events-year-wise/events-year-wise.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubeVideoComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedEventsComponent,
    EventsComponent,
    EventsYearWiseComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,YoutubePlayerModule,
    MatToolbarModule,MatCardModule,MatButtonModule,MatExpansionModule, MatSidenavModule, MatIconModule, 
    MatListModule,MatSelectModule,FlexLayoutModule,LayoutModule,
    NgbModule,AppRoutingModule,MatTabsModule,MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
