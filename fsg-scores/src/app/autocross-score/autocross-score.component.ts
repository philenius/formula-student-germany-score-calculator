import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AutocrossScoreService } from '../autocross-score.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-autocross-score',
  templateUrl: './autocross-score.component.html',
  styleUrls: ['./autocross-score.component.css']
})
export class AutocrossScoreComponent {

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
  autocrossScore = 0;

  constructor(private autocrossScoreService: AutocrossScoreService, private notifactionService: NotificationService) { }

  calculateAutocrossScore(): void {
    this.notifactionService.dismissCurrentErrorMessage();

    try {
      this.autocrossScore = this.autocrossScoreService.calculate(
        Number(this.tTeam.value), Number(this.tMax.value),
        this.tTeamUnit, this.tMaxUnit,
        Number(this.dooTTeam.value), Number(this.ocTTeam.value), Number(this.ussTTeam.value),
        Number(this.dooTMax.value), Number(this.ocTMax.value), Number(this.ussTMax.value)
      );
      if (isNaN(this.autocrossScore)) {
        this.notifactionService.showErrorMessage('Calculation of autocross score failed.');
      }
    } catch (e) {
      this.autocrossScore = NaN;
      this.notifactionService.showErrorMessage((e as Error).message);
    }
  }

}
