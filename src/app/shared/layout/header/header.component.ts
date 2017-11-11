import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';

import {LayoutService} from '../../services/layout.service';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuActive = false;
  @Input() data;
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(
    private layoutService: LayoutService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit() {
    this.layoutService.getMenuActive().subscribe(
      (newData) => {
        this.menuActive = newData;
      }
    );
  }

  onMenuButtonClick(event: Event) {
      this.layoutService.toggleMenuActive();
  }

  public goToElem(elemId): void {
    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, elemId);
    this.pageScrollService.start(pageScrollInstance);
  };
}
