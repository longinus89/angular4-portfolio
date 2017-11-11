import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class LayoutService {

  private menuActive = false;
  private subject = new Subject<any>();

  public getMenuActive(): Observable<boolean> {
    return this.subject.asObservable();
  }

  public toggleMenuActive() {
    this.menuActive = !this.menuActive;
    this.subject.next(this.menuActive);
  }

}
