import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteGalleryComponent } from '../site-gallery';
import { UserService} from '../shared';
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./styles/home.component.scss']
})


export class HomeComponent implements OnInit {

  tabSelected = '';

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.setListTo('rate-alert');
  }

  setListTo(tabSelected: string = '') {
    this.tabSelected = tabSelected;
  }
}
