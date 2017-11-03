import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SiteProfileInfoComponent } from './site-profile-info.component';
import { AuthGuard, SharedModule } from '../shared';

@NgModule({
  imports: [],
  declarations: [
    SiteProfileInfoComponent
  ],
  providers: [
  ],
  exports: [
    SiteProfileInfoComponent
  ]
})
export class SiteProfileInfoModule {}
