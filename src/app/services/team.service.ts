import { Injectable } from '@angular/core';
import { TeamData } from '../shared/TeamData';
import { Team } from '../shared/team';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeam(): Observable<Team[]>{
    return of(TeamData).pipe(delay(2000)); 
  }
}
