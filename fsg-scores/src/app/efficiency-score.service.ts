import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EfficiencyScoreService {

  constructor() { }

  calculate(eTeam: number, eMax: number) {
    return 100 * (((0.1 / eTeam) - 1) / ((0.1 / eMax) - 1));
  }
}
