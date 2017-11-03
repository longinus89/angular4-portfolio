import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule, ButtonModule, SplitButtonModule, MenuItem,
  CalendarModule, OverlayPanelModule } from 'primeng/primeng';
import { SiteGalleryElement } from './site-gallery-element.model';
import { SiteGalleryService } from './site-gallery.service';

@Component({
  selector: 'app-site-gallery',
  templateUrl: './site-gallery.component.html',
  styleUrls: ['./scss/site-gallery.scss'],
  providers: [ SiteGalleryService ]

})
export class SiteGalleryComponent implements OnInit {

    clicks = 0;
    items: SiteGalleryElement[];

    constructor(
      private siteGalleryService: SiteGalleryService,
      private route: ActivatedRoute,
      private router: Router

    ) {

      const that = this;

      const obs = siteGalleryService.getSiteGalleryElements();
      obs.subscribe(
        data => { that.items = data; console.log(that.items); },
        error => console.log(error)
      );
    }


    ngOnInit() {

    }
}
