import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild, ElementRef, } from '@angular/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';

import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuActive = null;
  @Input() data;
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(
    private userService: UserService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit() {
    this.menuActive = this.data;
    console.log(this.menuActive);
  }

  onMenuButtonClick(event: Event) {
      console.log('current menuActive value = ' + this.menuActive);
      this.menuActive = !this.menuActive;
      // console.log('emit in header component ' + this.menuActive);
      this.messageEvent.emit(this.menuActive);
      event.preventDefault();
  }
  public goToElem(elemId): void {
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, elemId);
    this.pageScrollService.start(pageScrollInstance);
  };
}
