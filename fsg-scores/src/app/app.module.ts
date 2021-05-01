import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { AccelerationScoreComponent } from './components/acceleration-score/acceleration-score.component';
import { AutocrossScoreComponent } from './components/autocross-score/autocross-score.component';
import { BppScoreComponent } from './components/bpp-score/bpp-score.component';
import { CostScoreComponent } from './components/cost-score/cost-score.component';
import { EfficiencyFactorComponent } from './components/efficiency-factor/efficiency-factor.component';
import { EfficiencyScoreComponent } from './components/efficiency-score/efficiency-score.component';
import { EnduranceScoreComponent } from './components/endurance-score/endurance-score.component';
import { SkidpadScoreComponent } from './components/skidpad-score/skidpad-score.component';

@NgModule({
  declarations: [
    AppComponent,
    EnduranceScoreComponent,
    EfficiencyFactorComponent,
    EfficiencyScoreComponent,
    AutocrossScoreComponent,
    SkidpadScoreComponent,
    AccelerationScoreComponent,
    CostScoreComponent,
    BppScoreComponent,
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
