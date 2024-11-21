export * from './use-milestones.types.ts';
import {QueryOptions} from '../../api.types.ts';
import {useQuery} from '@tanstack/react-query';
import {milestoneQuery, Milestone} from './use-milestones.types.ts';

export const useGetMilestonesQuery = <T = Milestone>(
  userId: string,
  options?: QueryOptions<Milestone, T, [milestoneQuery, string]>,
) =>
  useQuery({
    queryKey: [milestoneQuery.getMilestones, userId],
    queryFn: (): Promise<Milestone> => {
      return Promise.resolve({
        id: '1',
        title: 'Month 12',
        description: 'Honest',
        image: 'https://unsplash.it/400/400?image=5',
        link: 'https://www.google.com',
      });
    },
    ...options,
  });
