
export enum UserQuery {
  getProfile = 'getProfile',
  userNotifications = 'userNotifications',
}

export interface Profile {
  id: string;
  name: string;
  email: string;
  image: string;
}

export interface Notification {
  id: string;
  title: string;
}
