import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EfficiencyScoreService } from '../../services/efficiency-score.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-efficiency-score',
  templateUrl: './efficiency-score.component.html',
  styleUrls: ['./efficiency-score.component.css']
})
export class EfficiencyScoreComponent {

  eTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  eMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+(\.\d+)?$/))
  ]);
  efficiencyScore = 0;

  constructor(private efficiencyScoreService: EfficiencyScoreService, private notifactionService: NotificationService) { }

  calculateEfficiencyScore(): void {
    this.notifactionService.dismissCurrentErrorMessage();

    this.efficiencyScore = this.efficiencyScoreService.calculate(
      Number(this.eTeam.value), Number(this.eMax.value)
    );
    if (isNaN(this.efficiencyScore)) {
      this.notifactionService.showErrorMessage('Calculation of efficiency score failed.');
    }

  }

}
