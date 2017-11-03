import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared';
import { SiteGalleryModule } from '../site-gallery';
import { SiteRecommendationsModule } from '../site-recommendations';
import { SiteProfileInfoModule } from '../site-profile-info';
import { SiteExpertnessModule } from '../site-expertness';
import { SiteContactMeModule } from '../site-contact-me';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    resolve: {}
  }
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
    SiteGalleryModule,
    SiteRecommendationsModule,
    SiteProfileInfoModule,
    SiteExpertnessModule,
    SiteContactMeModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}
