export enum advertQuery {
  getAdvertInfo = 'getAdvertInfo',
}

export interface AdvertInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}
