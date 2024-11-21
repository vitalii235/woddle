import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import FastImage from 'react-native-fast-image';
import {useGetProfileQuery, useGetUserNotificationsQuery} from '../../api/hooks/use-user-query';

export const Header = () => {

  const {data: profile} = useGetProfileQuery();

  const  {data: notifications} = useGetUserNotificationsQuery({
    enabled: !!profile,
  });

  const isUnreadNotifications = !!notifications?.length;

  return (
    <View style={styles.headerContainer}>
      <FastImage
        source={require('../../assets/images/woddle.png')} // Replace with actual URL
        style={styles.logoPic}
      />

      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.notificationContainer}>
          <FastImage
            source={require('../../assets/images/box.png')}
            style={styles.notification}
          />
          {isUnreadNotifications && <View style={styles.notificationDot} />}
        </TouchableOpacity>

        <TouchableOpacity>
          <FastImage
            source={{
              uri:profile?.image,
            }}
            style={styles.profilePic}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
