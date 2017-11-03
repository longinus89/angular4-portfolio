import { SiteRecommendationOwner } from './site-recommendation-owner.model';

export class SiteRecommendation {
  uuid: string;
  description: string;
  owner: SiteRecommendationOwner;
  image: string;
  status: boolean;

  constructor(description: string, owner: SiteRecommendationOwner, image: string) {
      this.description = description;
      this.owner = owner;
      this.image = image;
      this.status = false;
  }

}
