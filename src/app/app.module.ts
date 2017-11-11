import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HomeModule } from './home/home.module';
import { SiteGalleryModule } from './site-gallery/site-gallery.module';
import { SiteRecommendationsModule } from './site-recommendations/site-recommendations.module';
import { SiteProfileInfoModule } from './site-profile-info/site-profile-info.module';
import { SiteExpertnessModule } from './site-expertness/site-expertness.module';
import { SiteContactMeModule } from './site-contact-me/site-contact-me.module';

import {
  ApiService,
  AuthGuard,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  JwtService,
  SharedModule,
  UserService
} from './shared';

import {LayoutService} from './shared/services/layout.service';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HomeModule,
    SiteGalleryModule,
    SiteRecommendationsModule,
    SiteProfileInfoModule,
    SiteExpertnessModule,
    SiteContactMeModule,
    rootRouting,
    SharedModule,
    BrowserAnimationsModule,
    NgxPageScrollModule
  ],
  providers: [
    ApiService,
    AuthGuard,
    JwtService,
    UserService,
    LayoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
