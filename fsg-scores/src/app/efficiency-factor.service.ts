import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EfficiencyFactorService {

  constructor() { }

  calculate(tTeam: number, tMin: number, tTeamUnit: string, tMinUnit: string,
    enTeam: number, enMin: number) {

    // unit conversion
    if (tTeamUnit === 'minutes') {
      tTeam = this.toSeconds(tTeam);
    }
    if (tMinUnit === 'minutes') {
      tMin = this.toSeconds(tMin);
    }

    return (tMin * Math.pow(enMin, 2)) / (tTeam * Math.pow(enTeam, 2));
  }

  private toSeconds(minutes: number): number {
    return minutes * 60;
  }

}
