import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { MenuItem } from 'primeng/primeng';
import { SiteRecommendation } from './site-recommendation.model';
import { SiteRecommendationOwner } from './site-recommendation-owner.model';
import { SiteRecommendationsService } from './site-recommendations.service';

@Component({
  selector: 'app-site-recommendations',
  templateUrl: './site-recommendations.component.html',
  styleUrls: ['./scss/site-recommendations.scss'],
  providers: [ SiteRecommendationsService ],
  animations: [
    trigger('siteRecommendationStatus', [
      state('false', style({
        left: '-4000px',
        display: 'none'
      })),
      state('true', style({
        left: '0px',
        display: 'inline'
      })),
      transition('true => false', animate('500ms ease-out')),
      transition('false => true', animate('500ms ease-in'))
    ])
  ]
})
export class SiteRecommendationsComponent implements OnInit, OnChanges {

    items: SiteRecommendation[];
    delayTime = 600;
    currentItem;

    constructor(
      private siteRecommendationsService: SiteRecommendationsService,
      private route: ActivatedRoute,
      private router: Router

    ) {

      const that = this;
      this.currentItem = 0;

      const obs = siteRecommendationsService.getSiteRecommendations();
      obs.subscribe(
        data => {
          that.items = data;
          that.resetRecommendations();
          this.items[0].status = true;

          setTimeout(function(){ that.setRecommendationListMinHeight() }, that.delayTime);
          window.onresize = () => {
            setTimeout(function(){ that.setRecommendationListMinHeight() }, that.delayTime);
          };
        },
        error => {
          console.log(error)
        }
      );
    }

    public resetRecommendations() {
      for (let key = 0; key < this.items.length; key++) {
        this.items[key].status = false;
      }
    }

    public setRecommendationListMinHeight() {
      // set raccomandation min height to current visible raccomandation height
      const currentRecommendation = document.querySelectorAll('.site-recommendation.active');

      const clientHeight = (typeof(currentRecommendation[0].clientHeight) !== 'undefined') ? currentRecommendation[0].clientHeight : 0;
      const height = (clientHeight + 20) + 'px';
      const recommendationList = document.getElementById('site-recommendation-list');

      recommendationList.style.minHeight = height;
    }

    public clickOwner(num) {
      this.currentItem = num;
      this.resetRecommendations();
      this.items[num].status = true;

      const that = this;
      setTimeout(function(){ that.setRecommendationListMinHeight() }, that.delayTime);
    }

    ngOnInit() {

    }
    ngOnChanges() {

    }
}
