import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CostScoreService {

  constructor() { }

  calculate(pTeam: number, pMax: number): number {
    return 95 * (pTeam / pMax);
  }

}
