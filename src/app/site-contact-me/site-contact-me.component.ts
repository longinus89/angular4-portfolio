import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-site-contact-me',
  templateUrl: './site-contact-me.component.html',
  styleUrls: ['./scss/site-contact-me.scss'],
  providers: []

})
export class SiteContactMeComponent implements OnInit {

    clicks = 0;
    email = 'antonio.martino.job@gmail.com';

    constructor(
      private pageScrollService: PageScrollService,
      @Inject(DOCUMENT) private document: any
    ) {
    }

    public openEmailClient($event) {

      let formattedBody = (<HTMLInputElement>document.getElementById('field3')).value;
      const subject = (<HTMLInputElement>document.getElementById('field2')).value;

      formattedBody = (<HTMLInputElement>document.getElementById('field1')).value + '\n' + formattedBody;

      const mailToLink = 'mailto:' + this.email + '?body=' + encodeURIComponent(formattedBody) + '&subject=' + subject;

      window.location.href = mailToLink;
      return false;
    }

    public goToHeadingInContainer(): void {
      const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#site-contact-me');
      this.pageScrollService.start(pageScrollInstance);
    };

    ngOnInit() {

    }
}
