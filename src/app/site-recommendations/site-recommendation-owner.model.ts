export class SiteRecommendationOwner {
  uuid: string;
  name: string;
  role: string;
  company: string;

  constructor(name: string, role: string, company: string) {
      this.name = name;
      this.role = role;
      this.company = company;
  }

  public getFullOwnerTitle() {
    return this.name + ' - ' + this.role + ' in ' +  this.company;
  }

}
