import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tab',
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  templateUrl: './tab.component.html'
})
export class Tab {
  @Input() title: string;
  @Input() active = false;
}
