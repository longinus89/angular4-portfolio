import { Component, OnInit } from '@angular/core';
import { UserService } from './shared';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor (
  ) {
    PageScrollConfig.defaultScrollOffset = 72;
  }
  ngOnInit() {
  }
}
