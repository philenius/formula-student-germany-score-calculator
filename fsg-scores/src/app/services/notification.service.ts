import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private defaultMessageDurationInMs = 5000;

  constructor(private snackBar: MatSnackBar) { }

  showErrorMessage(message: string, durationInMs?: number): void {
    durationInMs = durationInMs ? durationInMs : this.defaultMessageDurationInMs;
    this.snackBar.open(message, 'Error', { duration: durationInMs, panelClass: 'error' });
    console.error(message);
  }

  dismissCurrentErrorMessage(): void {
    this.snackBar.dismiss();
  }

}
