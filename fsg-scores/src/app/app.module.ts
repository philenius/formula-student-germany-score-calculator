import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnduranceScoreComponent } from './endurance-score/endurance-score.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

import { EfficiencyFactorComponent } from './efficiency-factor/efficiency-factor.component';
import { EfficiencyScoreComponent } from './efficiency-score/efficiency-score.component';
import { AutocrossScoreComponent } from './autocross-score/autocross-score.component';
import { SkidpadScoreComponent } from './skidpad-score/skidpad-score.component';

@NgModule({
  declarations: [
    AppComponent,
    EnduranceScoreComponent,
    EfficiencyFactorComponent,
    EfficiencyScoreComponent,
    AutocrossScoreComponent,
    SkidpadScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatSnackBarModule,
    MatIconModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
