import { Component, OnInit, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  tTeam: number = 0;
  tMax: number = 0;
  tTeamUnit = 'minutes';
  tMaxUnit = 'minutes';
  dooEnduranceTTeam: number = 0;
  ocEnduranceTTeam: number = 0;
  dooEnduranceTMax: number = 0;
  ocEnduranceTMax: number = 0;
  enduranceScore: number = 0;

  test = 0;

  constructor() { }

  ngOnInit() {
  }

  calculateEnduranceScore() {
    let tTeam = Number(this.tTeam);
    let tMax = Number(this.tMax);
    // unit conversion
    if (this.tTeamUnit === 'minutes') {
      tTeam = this.toSeconds(tTeam);
    }
    if (this.tMaxUnit === 'minutes') {
      tMax = this.toSeconds(tMax);
    }
    // penalties
    tTeam += this.penaltiesEnduranceTTeam();
    tMax += this.penaltiesEnduranceTMax();

    tMax *= 1.333;
    this.enduranceScore = 300 * (((tMax / tTeam) - 1) / 0.333);
  }

  private penaltiesEnduranceTTeam(): number {
    return this.penaltiesEndurance(this.dooEnduranceTTeam, this.ocEnduranceTTeam);
  }

  private penaltiesEnduranceTMax(): number {
    return this.penaltiesEndurance(this.dooEnduranceTMax, this.ocEnduranceTMax);
  }

  private penaltiesEndurance(doo: number, oc: number): number {
    let p = 0;
    if (doo !== 0) {
      p += doo * 2;
    }
    if (oc !== 0) {
      p += oc * 10;
    }
    return p;
  }

  private toSeconds(minutes: number): number {
    return minutes * 60;
  }

}
