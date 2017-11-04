import { Component, OnInit, Inject, ViewChild, ElementRef, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges  {

  menuActive = null;
  @Input() data;
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
  }

  ngOnInit() {
    this.menuActive = this.data;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.menuActive = changes.data.currentValue;
  }
  public goToElem(elemId): void {

    const pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, elemId);
    this.pageScrollService.start(pageScrollInstance);

    // changing menu-active and emit event for the parent
    console.log('menuActive in sidebar = ' + this.menuActive);
    this.menuActive = !this.menuActive;
    this.messageEvent.emit(this.menuActive);

  };
}
