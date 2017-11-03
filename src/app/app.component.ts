import { Component, OnInit } from '@angular/core';
import { UserService } from './shared';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  menuActive = false;

  constructor (
  ) {
    PageScrollConfig.defaultScrollOffset = 72;
  }
  ngOnInit() {
  }

  receiveMessage($event) {
    console.log('receiveMessage ' + $event);

    this.menuActive = $event
  }
}
