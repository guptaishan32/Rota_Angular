import { Component, OnInit } from '@angular/core';
import { TeamData } from '../shared/TeamData';
import { Team } from '../shared/team';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./cube.scss','./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  team :Team[];

  ngOnInit() {
    this.teamService.getTeam().subscribe(Team => this.team = Team);
      
  }

  CoordinatorName = "Your Name";
  CoordinatorDesignation = "Designation";
  CoordinatorPic = "";
  CoordinatorEmaill = "Your Email";
  CoordinatorFB = "";
  CoordinatorLinkedin = "";
  CoordinatorInsta = ""


  ExPresidentName = "Your Name";
  ExPresidentDesignation = "Designation";
  ExPresidentPic = "";
  ExPresidentEmaill = "Your Email";
  ExPresidentFB = "";
  ExPresidentLinkedin = "";
  ExPresidentInsta = "";
}
