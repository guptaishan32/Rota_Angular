import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component'
import { EventsComponent } from '../events/events.component';
import { TeamComponent } from '../team/team.component';

export const routes: Routes = [
    { path : 'home', component: HomeComponent },
    { path : 'events', component: EventsComponent },
    { path : 'team', component: TeamComponent },
    { path: '', redirectTo:'/home', pathMatch:'full' }
] 