import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccelerationScoreService } from '../acceleration-score.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-acceleration-score',
  templateUrl: './acceleration-score.component.html',
  styleUrls: ['./acceleration-score.component.css']
})
export class AccelerationScoreComponent implements OnInit {

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
  ussTTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  dooTMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  ocTMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  ussTMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);

  tTeamUnit = 'minutes';
  tMaxUnit = 'minutes';
  accelerationScore: number = 0;

  constructor(private accelerationScoreService: AccelerationScoreService, private notifactionService: NotificationService) { }

  ngOnInit() {
  }

  calculateAccelerationScore() {
    this.notifactionService.dismissCurrentErrorMessage();

    try {
      this.accelerationScore = this.accelerationScoreService.calculate(
        Number(this.tTeam.value), Number(this.tMax.value),
        this.tTeamUnit, this.tMaxUnit,
        Number(this.dooTTeam.value), Number(this.ocTTeam.value), Number(this.ussTTeam.value),
        Number(this.dooTMax.value), Number(this.ocTMax.value), Number(this.ussTMax.value)
      );
      if (isNaN(this.accelerationScore)) {
        this.notifactionService.showErrorMessage('Calculation of acceleration score failed.');
      }
    } catch (e) {
      this.accelerationScore = NaN;
      this.notifactionService.showErrorMessage((e as Error).message);
    }
  }
}
