import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component'
import { EventsComponent } from '../events/events.component';

export const routes: Routes = [
    { path : 'home', component: HomeComponent },
    { path : 'events', component: EventsComponent },
    { path: '', redirectTo:'/home', pathMatch:'full' }
] 