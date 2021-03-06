import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnduranceScoreService {

  constructor() { }

  calculate(
    tTeam: number,
    tMax: number,
    tTeamUnit: string,
    tMaxUnit: string,
    tTeamDoo: number,
    tTeamOc: number,
    tMaxDoo: number,
    tMaxOc: number
  ): number {

    // unit conversion
    if (tTeamUnit === 'minutes') {
      tTeam *= 60;
    }
    if (tMaxUnit === 'minutes') {
      tMax *= 60;
    }

    // penalties
    tTeam += this.penaltiesEndurance(tTeamDoo, tTeamOc);
    tMax += this.penaltiesEndurance(tMaxDoo, tMaxOc);

    tMax *= 1.333;
    return 300 * (((tMax / tTeam) - 1) / 0.333);
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

}
