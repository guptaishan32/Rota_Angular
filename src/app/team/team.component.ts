import { Component, OnInit } from '@angular/core';
import { TeamData } from '../shared/TeamData';
import { Team } from '../shared/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./cube.scss','./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  team :Team[] = TeamData;

  ngOnInit() {
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
