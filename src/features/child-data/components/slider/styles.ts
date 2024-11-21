import {StyleSheet} from 'react-native';

export const styles =  StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 23,
  },
  overlayText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    fontSize: 4,
  },
  babyName: {
    fontSize: 14,
  },
  babyAge: {
    fontSize: 14,
    color: '#555',
  },
});
