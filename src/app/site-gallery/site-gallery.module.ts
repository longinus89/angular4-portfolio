import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SiteGalleryComponent } from './site-gallery.component';
import { AuthGuard, SharedModule } from '../shared';
import { AccordionModule, ButtonModule, SplitButtonModule, MenuItem, CalendarModule, OverlayPanelModule } from 'primeng/primeng';
import { CarouselModule } from 'ngx-bootstrap';

const siteGalleryRouting: ModuleWithProviders = RouterModule.forChild([]);

@NgModule({
  imports: [
    BrowserModule,
    siteGalleryRouting,
    SharedModule,
    BrowserAnimationsModule,
    AccordionModule,
    ButtonModule,
    SplitButtonModule,
    OverlayPanelModule,
    CarouselModule.forRoot()
  ],
  declarations: [
    SiteGalleryComponent
  ],
  providers: [
  ],
  exports: [
    SiteGalleryComponent
  ]
})
export class SiteGalleryModule {}
