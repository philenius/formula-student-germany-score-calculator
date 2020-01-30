import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BppScoreService {

  constructor() { }

  calculate(pTeam: number, pMax: number) {
    return 70 * (pTeam / pMax);
  }

}
