import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-expertness',
  templateUrl: './site-expertness.component.html',
  styleUrls: ['./scss/site-expertness.scss'],
  providers: []

})
export class SiteExpertnessComponent implements OnInit {

    clicks = 0;

    constructor(
      private route: ActivatedRoute,
      private router: Router

    ) {
    }


    ngOnInit() {

    }
}
