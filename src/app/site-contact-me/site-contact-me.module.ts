import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SiteContactMeComponent } from './site-contact-me.component';
import { AuthGuard, SharedModule } from '../shared';

@NgModule({
  imports: [],
  declarations: [
    SiteContactMeComponent
  ],
  providers: [
  ],
  exports: [
    SiteContactMeComponent
  ]
})
export class SiteContactMeModule {}
