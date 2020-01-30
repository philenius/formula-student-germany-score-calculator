import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccelerationScoreService {

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
    tTeam += this.penaltiesAcceleration(tTeamDoo, tTeamOc, tTeamUss);
    tMax += this.penaltiesAcceleration(tMaxDoo, tMaxOc, tMaxUss);

    tMax *= 1.5;
    return 71.5 * (((tMax / tTeam) - 1) / 0.5);
  }

  private penaltiesAcceleration(doo: number, oc: number, uss: number): number {
    let p = 0;
    if (doo !== 0) {
      p += doo * 2;
    }
    if (oc !== 0 || uss !== 0) {
      throw new Error('Warning: Unsafe Stop (USS) causes penalty of Did not Finish (DNF).')
    }
    return p;
  }

}
