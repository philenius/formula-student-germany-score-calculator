import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EnduranceScoreService } from '../endurance-score.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-endurance-score',
  templateUrl: './endurance-score.component.html',
  styleUrls: ['./endurance-score.component.css']
})
export class EnduranceScoreComponent implements OnInit {

  tTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  tMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  dooTTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  ocTTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  dooTMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  ocTMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);

  tTeamUnit = 'minutes';
  tMaxUnit = 'minutes';
  enduranceScore: number = 0;

  constructor(private enduranceScoreService: EnduranceScoreService, private notifactionService: NotificationService) { }

  ngOnInit() {
  }

  calculateEnduranceScore() {
    this.notifactionService.dismissCurrentErrorMessage();

    this.enduranceScore = this.enduranceScoreService.calculate(
      Number(this.tTeam.value), Number(this.tMax.value),
      this.tTeamUnit, this.tMaxUnit,
      Number(this.dooTTeam.value), Number(this.ocTTeam.value),
      Number(this.dooTMax.value), Number(this.ocTMax.value)
    );
    if (isNaN(this.enduranceScore)) {
      this.notifactionService.showErrorMessage('Calculation of endurance score failed.');
    }
  }

}
