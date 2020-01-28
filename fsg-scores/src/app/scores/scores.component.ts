import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EnduranceScoreService } from '../endurance-score.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  tTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d{1,2})?$/))
  ]);
  tMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d{1,2})?$/))
  ]);
  dooEnduranceTTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  ocEnduranceTTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  dooEnduranceTMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  ocEnduranceTMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);

  tTeamUnit = 'minutes';
  tMaxUnit = 'minutes';
  enduranceScore: number = 0;

  constructor(private enduranceScoreService: EnduranceScoreService) { }

  ngOnInit() {
  }

  calculateEnduranceScore() {
    let tTeam = Number(this.tTeam.value);
    let tMax = Number(this.tMax.value);

    this.enduranceScore = this.enduranceScoreService.calculate(tTeam, tMax, this.tTeamUnit, this.tMaxUnit, this.dooEnduranceTTeam.value,
      this.ocEnduranceTTeam.value, this.dooEnduranceTMax.value, this.ocEnduranceTMax.value);
  }

}
