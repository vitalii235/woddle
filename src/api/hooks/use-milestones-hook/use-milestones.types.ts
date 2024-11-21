export enum milestoneQuery {
  getMilestones = 'getMilestones',
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}
