export * from './use-advert-query.types.ts';
import {QueryOptions} from '../../api.types.ts';
import {useQuery} from '@tanstack/react-query';
import {advertQuery, AdvertInfo} from './use-advert-query.types.ts';

export const useGetAdvertQuery = <T = AdvertInfo>(
  options?: QueryOptions<AdvertInfo, T, [advertQuery]>,
) =>
  useQuery({
    queryKey: [advertQuery.getAdvertInfo],
    queryFn: (): Promise<AdvertInfo> => {
      return Promise.resolve({
        id: '1',
        title: 'Save Big with Bundles!',
        description: 'Honest',
        image: 'https://unsplash.it/400/400?image=4',
        link: 'https://www.google.com',
      });
    },
    ...options,
  });
