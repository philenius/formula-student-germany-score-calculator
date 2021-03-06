import { Component } from '@angular/core';
import { CostScoreService } from '../../services/cost-score.service';
import { NotificationService } from '../../services/notification.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cost-score',
  templateUrl: './cost-score.component.html',
  styleUrls: ['./cost-score.component.css']
})
export class CostScoreComponent {

  pTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  pMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  costScore = 0;

  constructor(private costScoreService: CostScoreService, private notifactionService: NotificationService) { }

  calculateCostScore(): void {
    this.notifactionService.dismissCurrentErrorMessage();

    this.costScore = this.costScoreService.calculate(
      Number(this.pTeam.value), Number(this.pMax.value)
    );
    if (isNaN(this.costScore)) {
      this.notifactionService.showErrorMessage('Calculation of cost score failed.');
    }

  }

}
