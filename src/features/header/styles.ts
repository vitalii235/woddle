import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationContainer: {
    marginRight: 16,
    position: 'relative',
  },
  notification: {
    width: 30,
    height: 22,
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    top: -2,
    right: 2,
  },
  logoPic: {
    width: 140,
    height: 26,
  },

  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
