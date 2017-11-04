import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule, ButtonModule, SplitButtonModule, MenuItem,
  CalendarModule, OverlayPanelModule, OverlayPanel } from 'primeng/primeng';
import { SiteGalleryElement } from './site-gallery-element.model';
import { SiteGalleryService } from './site-gallery.service';
import { ModalService, ModalComponent } from '../shared/modal';

@Component({
  selector: 'app-site-gallery',
  templateUrl: './site-gallery.component.html',
  styleUrls: ['./scss/site-gallery.scss'],
  providers: [ SiteGalleryService, ModalService ]

})
export class SiteGalleryComponent implements OnInit {

    clicks = 0;
    items: SiteGalleryElement[];
    selectedItem = null;

    constructor(
      private siteGalleryService: SiteGalleryService,
      private route: ActivatedRoute,
      private router: Router,
      private modalService: ModalService
    ) {

      const that = this;

      const obs = siteGalleryService.getSiteGalleryElements();
      obs.subscribe(
        data => {
          that.items = data;
          console.log(that.items);
          that.selectedItem = data[0];
        },
        error => console.log(error)
      );
    }


    ngOnInit() {

    }

    public selectItem(event, item: SiteGalleryElement, overlaypanel: OverlayPanel) {
        this.selectedItem = item;
        overlaypanel.toggle(event);
    }

    openModal(id: string) {
        console.log('open modal in site gallery ' + id);
        this.modalService.open(id);
    }

    closeModal(id: string) {
        this.modalService.close(id);
    }
}
