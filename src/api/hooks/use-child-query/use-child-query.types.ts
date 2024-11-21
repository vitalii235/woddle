export enum ChildQuery {
  getChildInfo = 'getChildInfo',
}

interface Stats {
  value: string;
  timestamp: string;
}

export interface ChildInfo {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  image: string;
  weight: Stats;
  diaperSize: Stats;
  feeding: Stats,
  sleeping: Stats,
}
