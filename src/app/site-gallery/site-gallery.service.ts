import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

import { SiteGalleryElement } from './site-gallery-element.model';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class SiteGalleryService {

  constructor(private http: Http) {

  }

   getSiteGalleryElements(): Observable<SiteGalleryElement[]> {
     return this.http.get('/assets/data/site-gallery.json')
                     .map((res: Response) => {

                       const data = res.json();
                       const elements = data['site-gallery-elements'];
                       console.log(elements);
                       return <SiteGalleryElement[]> elements;
                     })
                     .catch(this.handleError);
   }
   private handleError(error: Response) {
    return Observable.throw(error.statusText);
}


}
