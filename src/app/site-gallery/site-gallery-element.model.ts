export class SiteGalleryElement {
  uuid: string;
  previewImage: string;
  previewTitle: string;
  previewDescription: string;
  extendedTitle: string;
  extendedDescription: string;
  gallery: string[] = [];

  constructor(previewImage: string, previewTitle: string, previewDescription: string,
    extendedTitle: string, extendedDescription: string, gallery: string[]) {
      this.previewImage = previewImage;
      this.previewTitle = previewTitle;
      this.previewDescription = previewDescription;
      this.extendedTitle = extendedTitle;
      this.extendedDescription = extendedDescription;
      this.gallery = gallery;
  }

}
