import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SiteRecommendationsComponent } from './site-recommendations.component';
import { AuthGuard, SharedModule } from '../shared';

import { CarouselModule } from 'ngx-bootstrap';

const siteGalleryRouting: ModuleWithProviders = RouterModule.forChild([]);

@NgModule({
  imports: [
    BrowserModule,
    siteGalleryRouting,
    SharedModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  declarations: [
    SiteRecommendationsComponent
  ],
  providers: [
  ],
  exports: [
    SiteRecommendationsComponent
  ]
})
export class SiteRecommendationsModule {}
