import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotificationService } from '../notification.service';
import { SkidpadScoreService } from '../skidpad-score.service';

@Component({
  selector: 'app-skidpad-score',
  templateUrl: './skidpad-score.component.html',
  styleUrls: ['./skidpad-score.component.css']
})
export class SkidpadScoreComponent {

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
  skidpadScore = 0;

  constructor(private skidpadScoreService: SkidpadScoreService, private notifactionService: NotificationService) { }

  calculateSkidpadScore(): void {
    this.notifactionService.dismissCurrentErrorMessage();

    try {
      this.skidpadScore = this.skidpadScoreService.calculate(
        Number(this.tTeam.value), Number(this.tMax.value),
        this.tTeamUnit, this.tMaxUnit,
        Number(this.dooTTeam.value), Number(this.ocTTeam.value), Number(this.ussTTeam.value),
        Number(this.dooTMax.value), Number(this.ocTMax.value), Number(this.ussTMax.value)
      );
      if (isNaN(this.skidpadScore)) {
        this.notifactionService.showErrorMessage('Calculation of skidpad score failed.');
      }
    } catch (e) {
      this.skidpadScore = NaN;
      this.notifactionService.showErrorMessage((e as Error).message);
    }
    if (this.skidpadScore < 0) {
      this.skidpadScore = 0.0;
      this.notifactionService.showErrorMessage('No additional points awarded because team’s run ' +
        'time including penalties is not below Tmax.');
    }
  }

}
