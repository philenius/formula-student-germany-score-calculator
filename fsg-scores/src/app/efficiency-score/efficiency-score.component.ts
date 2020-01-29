import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EfficiencyScoreService } from '../efficiency-score.service';

@Component({
  selector: 'app-efficiency-score',
  templateUrl: './efficiency-score.component.html',
  styleUrls: ['./efficiency-score.component.css']
})
export class EfficiencyScoreComponent implements OnInit {

  eTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  eMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  efficiencyScore: number = 0;

  constructor(private efficiencyScoreService: EfficiencyScoreService) { }

  ngOnInit() {
  }

  calculateEfficiencyScore() {
    this.efficiencyScore = this.efficiencyScoreService.calculate(
      Number(this.eTeam.value), Number(this.eMax.value)
    );
  }

}
