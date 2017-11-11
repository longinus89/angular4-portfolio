import { Component, OnInit, Inject, OnChanges, SimpleChanges } from '@angular/core';
import { PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';
import {LayoutService} from "../../services/layout.service";

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges  {

  private menuActive = false;

  constructor(
    private pageScrollService: PageScrollService,
    private layoutService: LayoutService,
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

  ngOnChanges(changes: SimpleChanges) {
    this.menuActive = changes.data.currentValue;
  }
  public goToElem(elemId): void {

    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, elemId);
    this.pageScrollService.start(pageScrollInstance);

    // changing menu-active
    this.layoutService.toggleMenuActive();

  };
}
