import { Component, OnInit } from '@angular/core';
import { UserService} from '../shared';
@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./scss/home.component.scss']
})


export class HomeComponent implements OnInit {

  tabSelected = '';

  ngOnInit() {
    this.setListTo('rate-alert');
  }

  setListTo(tabSelected: string = '') {
    this.tabSelected = tabSelected;
  }
}
