import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkidpadScoreService {
  
  calculate(tTeam: number, tMax: number, tTeamUnit: string, tMaxUnit: string,
    tTeamDoo: number, tTeamOc: number, tTeamUss: number,
    tMaxDoo: number, tMaxOc: number, tMaxUss: number) {

    // unit conversion
    if (tTeamUnit === 'minutes') {
      tTeam *= 60;
    }
    if (tMaxUnit === 'minutes') {
      tMax *= 60;
    }

    // penalties
    tTeam += this.penaltiesSkidpad(tTeamDoo, tTeamOc, tTeamUss);
    tMax += this.penaltiesSkidpad(tMaxDoo, tMaxOc, tMaxUss);

    tMax *= 1.25;
    return 71.5 * ((Math.pow(tMax / tTeam, 2) - 1) / 0.5625);
  }

  private penaltiesSkidpad(doo: number, oc: number, uss: number): number {
    let p = 0;
    if (doo !== 0) {
      p += doo * 0.2;
    }
    if (oc !== 0 || uss !== 0) {
      throw new Error('Warning: Unsafe Stop (USS) causes penalty of Did not Finish (DNF).')
    }
    return p;
  }
}
