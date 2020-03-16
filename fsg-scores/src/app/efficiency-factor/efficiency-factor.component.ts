import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EfficiencyFactorService } from '../efficiency-factor.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-efficiency-factor',
  templateUrl: './efficiency-factor.component.html',
  styleUrls: ['./efficiency-factor.component.css']
})
export class EfficiencyFactorComponent implements OnInit {

  tTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  tMin = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  enTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  enMin = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);

  tTeamUnit = 'minutes';
  tMinUnit = 'minutes';
  efficiencyFactor: number = 0;

  constructor(private efficiencyFactorService: EfficiencyFactorService, private notifactionService: NotificationService) { }

  ngOnInit() {
  }

  calculateEfficiencyFactor() {
    this.notifactionService.dismissCurrentErrorMessage();

    this.efficiencyFactor = this.efficiencyFactorService.calculate(
      Number(this.tTeam.value), Number(this.tMin.value),
      this.tTeamUnit, this.tMinUnit,
      Number(this.enTeam.value), Number(this.enMin.value)
    );
    if (isNaN(this.efficiencyFactor)) {
      this.notifactionService.showErrorMessage('Calculation of efficiency factor failed.');
    }
  }

}
