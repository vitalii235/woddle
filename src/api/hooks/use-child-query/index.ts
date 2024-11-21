import {useQuery} from '@tanstack/react-query';
import {ChildInfo, ChildQuery} from './use-child-query.types.ts';
import {QueryOptions} from '../../api.types.ts';

export const useGetChildInfoQuery = <T = ChildInfo[]>(
  userId: string,
  options?: QueryOptions<ChildInfo[], T, [ChildQuery, string]>,
) =>
  useQuery({
    queryKey: [ChildQuery.getChildInfo, userId],
    queryFn: (): Promise<ChildInfo[]> => {
      return Promise.resolve([
        {
          id: '1',
          name: 'John Doe',
          image: 'https://unsplash.it/400/400?image=2',
          age: 12,
          gender: 'male',
          weight: { value: '15 lbs 3 oz', timestamp: '1:00 PM Dec 05 2023' },
          diaperSize: { value: 'Pee Medium', timestamp: '2h 55m ago' },
          feeding: { value: 'Formula 5oz', timestamp: '2h 30m ago' },
          sleeping: { value: '2h 20m', timestamp: '3h 35m ago' },
        },
        {
          id: '2',
          name: 'Jane Doe',
          age: 14,
          gender: 'female',
          image: 'https://unsplash.it/400/400?image=3',
          weight: { value: '14 lbs 6 oz', timestamp: '3:00 PM Dec 05 2023' },
          diaperSize: { value: 'Pee Small', timestamp: '1h 10m ago' },
          feeding: { value: 'Breast Milk 4oz', timestamp: '1h 15m ago' },
          sleeping: { value: '1h 45m', timestamp: '2h ago' },
        },
      ]);
    },
    ...options,
  });
