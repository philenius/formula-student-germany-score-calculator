import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  calculateEnduranceScore() {
    let tTeam = Number(this.tTeam.value);
    let tMax = Number(this.tMax.value);
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
    return this.penaltiesEndurance(this.dooEnduranceTTeam.value, this.ocEnduranceTTeam.value);
  }

  private penaltiesEnduranceTMax(): number {
    return this.penaltiesEndurance(this.dooEnduranceTMax.value, this.ocEnduranceTMax.value);
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
