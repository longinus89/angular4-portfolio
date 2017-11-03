import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-profile-info',
  templateUrl: './site-profile-info.component.html',
  styleUrls: ['./scss/site-profile-info.scss'],
  providers: []

})
export class SiteProfileInfoComponent implements OnInit {

    clicks = 0;

    constructor(
      private route: ActivatedRoute,
      private router: Router

    ) {
    }


    ngOnInit() {

    }
}
