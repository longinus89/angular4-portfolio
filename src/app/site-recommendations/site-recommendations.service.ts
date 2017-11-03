import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response} from '@angular/http';

import { SiteRecommendation } from './site-recommendation.model';
import { SiteRecommendationOwner } from './site-recommendation-owner.model';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class SiteRecommendationsService {

  constructor(private http: Http) {

  }

  public getSiteRecommendations(): Observable<SiteRecommendation[]> {
   return this.http.get('/assets/data/site-recommendations.json')
                   .map((res: Response) => {

                     const data = res.json();
                     const elements = data['site-recommendations'];

                     const returningArray = [];

                     for (let key = 0; key < elements.length; key++) {

                        const currEl = elements[key];
                        currEl.owner = new SiteRecommendationOwner(currEl.owner.name, currEl.owner.role, currEl.owner.company);

                        returningArray.push(currEl);

                     }

                     return <SiteRecommendation[]> returningArray;

                   })
                   .catch(this.handleError);
  }
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


}
