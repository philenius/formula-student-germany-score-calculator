import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutocrossScoreService {

  constructor() { }

  calculate(
    tTeam: number,
    tMax: number,
    tTeamUnit: string,
    tMaxUnit: string,
    tTeamDoo: number,
    tTeamOc: number,
    tTeamUss: number,
    tMaxDoo: number,
    tMaxOc: number,
    tMaxUss: number
  ): number {

    // unit conversion
    if (tTeamUnit === 'minutes') {
      tTeam *= 60;
    }
    if (tMaxUnit === 'minutes') {
      tMax *= 60;
    }

    // penalties
    tTeam += this.penaltiesAutocross(tTeamDoo, tTeamOc, tTeamUss);
    tMax += this.penaltiesAutocross(tMaxDoo, tMaxOc, tMaxUss);

    tMax *= 1.25;
    return 95.5 * (((tMax / tTeam) - 1) / 0.25);
  }

  private penaltiesAutocross(doo: number, oc: number, uss: number): number {
    let p = 0;
    if (doo !== 0) {
      p += doo * 2;
    }
    if (oc !== 0) {
      p += oc * 10;
    }
    if (uss !== 0) {
      throw new Error('Warning: Unsafe Stop (USS) causes penalty of Did not Finish (DNF).');
    }
    return p;
  }

}
