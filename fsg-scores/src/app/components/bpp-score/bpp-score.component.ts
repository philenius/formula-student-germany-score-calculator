import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BppScoreService } from '../../services/bpp-score.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-bpp-score',
  templateUrl: './bpp-score.component.html',
  styleUrls: ['./bpp-score.component.css']
})
export class BppScoreComponent {

  pTeam = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  pMax = new FormControl(0, [
    Validators.pattern(new RegExp(/^\d+$/))
  ]);
  bppScore = 0;

  constructor(private bppScoreService: BppScoreService, private notifactionService: NotificationService) { }

  calculateBppScore(): void {
    this.notifactionService.dismissCurrentErrorMessage();

    this.bppScore = this.bppScoreService.calculate(
      Number(this.pTeam.value), Number(this.pMax.value)
    );
    if (isNaN(this.bppScore)) {
      this.notifactionService.showErrorMessage('Calculation of Business Plan Presentation score failed.');
    }

  }

}
