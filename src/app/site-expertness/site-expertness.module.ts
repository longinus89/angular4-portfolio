import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SiteExpertnessComponent } from './site-expertness.component';
import { AuthGuard, SharedModule } from '../shared';

@NgModule({
  imports: [],
  declarations: [
    SiteExpertnessComponent
  ],
  providers: [
  ],
  exports: [
    SiteExpertnessComponent
  ]
})
export class SiteExpertnessModule {}
