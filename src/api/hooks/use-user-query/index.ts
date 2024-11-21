import {QueryOptions} from '../../api.types.ts';
import {useQuery} from '@tanstack/react-query';
import {Profile, UserQuery, Notification} from './use-user-query.types.ts';

export const useGetProfileQuery = <T = Profile>(
  options?: QueryOptions<Profile, T, [UserQuery]>,
) =>
  useQuery({
    queryKey: [UserQuery.getProfile],
    queryFn: (): Promise<Profile> => {
      return Promise.resolve({
        id: '1',
        name: 'John Doe',
        email: 'johndoe@example.com',
        image: 'https://unsplash.it/400/400?image=1',
      });
    },
    ...options,
  });

export const useGetUserNotificationsQuery = <T = Notification[]>(
  options?: QueryOptions<Notification[], T, [UserQuery]>,
) =>
  useQuery({
    queryKey: [UserQuery.userNotifications],
    queryFn: (): Promise<Notification[]> => {
      return Promise.resolve([
        {
          id: '1',
          title: 'New message from John Doe',
        },
        {
          id: '2',
          title: 'New message from Jane Doe',
        },
      ]);
    },
    ...options,
  });
