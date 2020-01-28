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
      tTeam *= 60;
    }
    if (tMinUnit === 'minutes') {
      tMin *= 60;
    }

    return (tMin * Math.pow(enMin, 2)) / (tTeam * Math.pow(enTeam, 2));
  }

}
